class Api::DriversController < ApplicationController
  skip_before_action :authenticate  

  def index
  end

  def show_rides_params
    params.permit(:driver_id)
  end

  
  def show
    @ride = Ride.where(show_rides_params).map {|ride|
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
      trip_count: driver.trip_count
    }
  }
    render json: @ride
   
  end

  def profile_params
    params.permit(:user_id)
  end

  def profile
    
    @drivers = Driver.where(profile_params).map {|driver|
    {
    
      car_make: driver.car_make,
      car_model: driver.car_model,
      car_color: driver.car_color,
      licence_plate: driver.licence_plate, 
      trip_count: driver.trip_count
     
    }

    }
  render @drivers
  end

end
