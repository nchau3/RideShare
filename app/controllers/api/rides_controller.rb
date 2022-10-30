class Api::RidesController < ApplicationController
  def index
    @rides = Ride.all.map {|ride| {
      pickup: ride.pickup,
      dropoff: ride.dropoff,
      driver: Driver.find(ride.driver.id),
      departure_date_time: ride.departure_date_time,
      number_of_seats: ride.number_of_seats,
      cost_per_seat: ride.cost_per_seat,
      description: ride.description
      }}

    render json: @rides
  end

  def search

    @rides = Ride.where(pickup: params[:pickup], dropoff: params[:dropoff])
    render json: @rides
  end
end

# @enhanced_cart ||= Product.where(id: cart.keys).map {|product| { product:product, quantity: cart[product.id.to_s] } }
