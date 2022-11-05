class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authenticate

  def current_user
    @current_user
  end

  def logged_in?
    !!current_user
  end

  def remaining_seats(ride_id)
    total_seats = Ride.find(ride_id).number_of_seats
    trips_booked = Trip.where(ride_id: ride_id).count
    remaining_seats = total_seats - trips_booked
  end

  private
  def authenticate
    Rails.logger.info request.headers["Authorization"]
    authenticate_or_request_with_http_token do |token, options|
      @current_user = User.find_by(token: token)
    end
  end
end
