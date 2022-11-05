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
    @rides = Ride.all.sort_by(&:departure_date_time).map {|ride|
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

    @rides = Ride.where(modified_params).sort_by(&:departure_date_time).map {|ride|
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

  def ride_params
    params.permit(:driver_id, :departure_date_time, :pickup, :dropoff, :number_of_seats, :cost_per_seat, :description, :allow_pets, :allow_oversize, :allow_skis, :allow_bikes) 
  end

  def create
    ride = Ride.new(ride_params)
    if ride.save
      render :json => {
        status: 201
      }
    else 
      render :json => {
        status: 401
      }
    end
  end

  def destroy
    @rides = Ride.find(params[:id])
    @rides.destroy
  end

  def update
    ride = Ride.find(params[:id])
    if ride.id 
      ride.update(ride_params)
      render :json => {
        status: 201
      }
    end
  end
    

end