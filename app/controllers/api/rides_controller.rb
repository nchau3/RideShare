class Api::RidesController < ApplicationController
  def index
    @rides = Ride.all
    render json: @rides
  end

  def search

    @rides = Ride.where(pickup: params[:pickup], dropoff: params[:dropoff])
    render json: @rides
  end
end
