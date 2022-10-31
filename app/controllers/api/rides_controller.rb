class Api::RidesController < ApplicationController
  before_action :check_pickup, only: [:search]

  def check_pickup
  
    if params[:pickup].blank? #check to see if pickup paramater exists
      render json:{}, status: 400
    return 
    end
  end



  def index
    @rides = Ride.all.map {|ride|
      driver = Driver.find(ride.driver.id)
      user = User.find(ride.driver.user.id)
      {
        id: ride.id,
        departure_date_time: ride.departure_date_time,
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
        car_make: driver.car_make,
        car_model: driver.car_model,
        car_color: driver.car_color,
        licence_plate: driver.licence_plate
      }
    }
    
    render json: @rides
  end

  def search_params
    params.permit(:pickup, :dropoff)

  end

  def search
    puts search_params
    @rides = Ride.where(search_params).map {|ride|
    driver = Driver.find(ride.driver.id)
    user = User.find(ride.driver.user.id)
    {
      id: ride.id,
      departure_date_time: ride.departure_date_time,
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
      car_make: driver.car_make,
      car_model: driver.car_model,
      car_color: driver.car_color,
      licence_plate: driver.licence_plate
    }
  }
    render json: @rides
  end
end

# @enhanced_cart ||= Product.where(id: cart.keys).map {|product| { product:product, quantity: cart[product.id.to_s] } }
