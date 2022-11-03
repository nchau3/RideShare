class Api::TripsController < ApplicationController
  def index
  end

  # Need to test code below for booking a trip (and route)

  def trip_params
    params.permit(:ride_id, :user_id)
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render :json => {
        status: 201
      }
    else 
      render :json => {
        status: 401
      }
  end
end
