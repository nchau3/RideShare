class Api::TripsController < ApplicationController
  skip_before_action :authenticate

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


  def show_trips_params
    params.permit(:user_id, :is_completed)
  end

  def show
    @trips = Trip.where(show_trips_params).sort_by { |trip| trip.ride.departure_date_time}
    .map {|trip|
    ride = Ride.find(trip.ride.id)
    driver = Driver.find(trip.ride.driver.id)
    user = User.find(trip.ride.driver.user.id)
    {
      id: trip.id,
      date_booked: trip.date_booked,
      is_new: trip.is_new,
      is_completed: trip.is_completed,
      ride_id: ride.id,
      departure_date_time: ride.departure_date_time.to_formatted_s(:long),
      pickup: ride.pickup,
      dropoff: ride.dropoff,
      number_of_seats: ride.number_of_seats,
      cost_per_seat: ride.cost_per_seat,
      description: ride.description,
      allow_pets: ride.allow_pets,
      allow_oversize: ride.allow_oversize,
      allow_skis: ride.allow_skis,
      allow_bikes: ride.allow_bikes,
      driver_id: driver.id,
      car_make: driver.car_make,
      car_model: driver.car_model,
      car_color: driver.car_color,
      licence_plate: driver.licence_plate, 
      rating: driver.rating,
      trip_count: driver.trip_count,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
      remaining_seats: remaining_seats(ride.id)
    }  

    }
  
    render json: @trips
  end

end

