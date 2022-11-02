class Api::TripsController < ApplicationController
  def index
  end

  def create
    @ride = Ride.find()

  end
end
