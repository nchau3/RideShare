# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'active_support/all'

puts "creating users..."
User.destroy_all
User.create(first_name: "Shaun", last_name: "Jiji", email: "shaun@shaun.com", password: "shaun")
User.create(first_name: "Coreen", last_name: "Huang", email: "coreen@coreen.com", password: "coreen")
User.create(first_name: "Nicholas", last_name: "Chau", email: "nicholas@nicholas.com", password: "nicholas")

avatar_counter = 0

20.times do
  user = User.new(
    first_name: Faker::Name.unique.male_first_name,
    last_name: Faker::Name.unique.last_name,
    password: "test",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/#{avatar_counter}.jpg"
    )

  user.email = Faker::Internet.free_email(name: user.first_name)
  user.save
  avatar_counter += 1
end

avatar_counter = 0

20.times do
  user = User.new(
    first_name: Faker::Name.unique.female_first_name,
    last_name: Faker::Name.unique.last_name,
    password: "test",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/#{avatar_counter}.jpg"
    )
  
  user.email = Faker::Internet.free_email(name: user.first_name)
  user.save
  avatar_counter += 1
end

puts "creating drivers..."

sample_user_id = 10


30.times do
  driver = Driver.new(
    user: User.find(sample_user_id),
    car_make: Faker::Vehicle.make,
    licence_plate: Faker::Vehicle.license_plate,
    car_color: Faker::Vehicle.color,
    rating: rand(3.8..5.0).round(1),
    trip_count: rand(2..150),
    phone_number: "#{[647, 416, 519, 226, 514, 438, 613, 250, 778].sample}-#{3.times.map{rand(9)}.join}-#{4.times.map{rand(9)}.join}"
    )
  driver.car_model = Faker::Vehicle.model(make_of_model: driver.car_make)
  driver.save
  sample_user_id += 1
end

puts "creating rides..."

# to reference user values by driver
# @driver = Driver.find(4)
# puts @driver.user.first_name

cities = ["Montréal", "Toronto", "London", "Markham", "Kingston", "Windsor", "Vancouver", "Kelowna", "North Dumfries", "Ottawa", "Newmarket", "Stouffville", "New York City"]

50.times do
  random_cities = cities.shuffle

  ride = Ride.new(
    driver: Driver.all.sample,
    departure_date_time: Faker::Time.forward(days: 30, period: :day),
    pickup: random_cities[0],
    dropoff: random_cities[1],
    number_of_seats: rand(1..3),
    cost_per_seat: rand(30..80),
    allow_pets: [true, false].sample,
    allow_oversize: [true, false].sample,
    allow_skis: [true, false].sample,
    allow_bikes: [true, false].sample
  )

  description = [
  "Hey all! Driving from #{ride.pickup} to #{ride.dropoff}. Please be on time!! Will have to leave even if you're late!",
  "PARTAYYYY CARPOOL! No boring people please, karaoke time for the duration of the ride. Hit me up if you're down!",
  "Please don't book with me if you're stinky. Have some consideration, people.",
  "Will make multiple stops for coffee & washroom breaks.",
  "Leaving on #{ride.departure_date_time.to_formatted_s(:long)} SHARP!! If you need to be picked up at another location, please let me know. Will charge extra $$$.",
  "Will wait for you if you're late - just let me know. Not rushing to get to #{ride.dropoff} for this trip.",
  "Flexible pickup - 5km radius of #{ride.pickup}'s City Hall. :D"
  ]

  ride.description = description.sample
  # accessing driver name through ride
  # puts ride.driver.user.first_name
  ride.save
end

puts "creating trips..."

5.times do
  trip = Trip.new(
    ride: Ride.all.sample, 
    user: User.find(4),
    is_new: false, 
    is_completed: true
  )
  trip.date_booked = Faker::Time.between(from: trip.ride.departure_date_time - 5.days, to: trip.ride.departure_date_time)
  trip.save
end
