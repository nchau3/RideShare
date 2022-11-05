require 'active_support/all'

class Api::RidesController < ApplicationController
  before_action :check_pickup, only: [:search]
  skip_before_action :authenticate

  def check_pickup
    if params[:pickup].blank? #check to see if pickup paramater exists
      render json:{}, status: 400
    return 
    end
  end

  def remaining_seats(ride_id)
    # number of seats - query to find how many have booked the trip = remaining seats

    seats_available = Ride.find(ride_id).number_of_seats
    puts ride_id
    puts seats_available
    # trips_booked = Trip.where()
    # remaining_seats = seats_available - trips_booked
  end

  def show
    @ride = Ride.where("id = #{params[:id]}").map {|ride|
    driver = Driver.find(ride.driver.id)
    user = User.find(ride.driver.user.id)
    {
      id: ride.id,
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
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
      car_make: driver.car_make,
      car_model: driver.car_model,
      car_color: driver.car_color,
      licence_plate: driver.licence_plate, 
      rating: driver.rating,
      trip_count: driver.trip_count,
      remaining_seats: remaining_seats(ride.id)
    }
  }
    render json: @ride
   
  end

  def index
    @rides = Ride.all.map {|ride|
      driver = Driver.find(ride.driver.id)
      user = User.find(ride.driver.user.id)
      {
        id: ride.id,
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
        first_name: user.first_name,
        last_name: user.last_name,
        avatar: user.avatar,
        car_make: driver.car_make,
        car_model: driver.car_model,
        car_color: driver.car_color,
        licence_plate: driver.licence_plate, 
        rating: driver.rating,
        trip_count: driver.trip_count,
        remaining_seats: remaining_seats(ride.id)
      }
    }
    render json: @rides
  end

  def search_params
    params.permit(:pickup, :dropoff, :allow_pets, :allow_oversize, :allow_skis, :allow_bikes, :departure_date_time)
  end

  def search
    modified_params = search_params

    if modified_params[:departure_date_time]
      @departure_beginning = params[:departure_date_time].to_date.beginning_of_day
      @departure_end = params[:departure_date_time].to_date.end_of_day
      modified_params[:departure_date_time] = @departure_beginning..@departure_end
    end

    @rides = Ride.where(modified_params).map {|ride|
    driver = Driver.find(ride.driver.id)
    user = User.find(ride.driver.user.id)
    {
      id: ride.id,
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
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
      car_make: driver.car_make,
      car_model: driver.car_model,
      car_color: driver.car_color,
      licence_plate: driver.licence_plate, 
      rating: driver.rating,
      trip_count: driver.trip_count,
      remaining_seats: remaining_seats(ride.id)
    }
  }
    render json: @rides
  end
end