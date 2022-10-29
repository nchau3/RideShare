# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating users..."
User.destroy_all
user_one = User.create(first_name: "Shaun", last_name: "Jiji", email: "shaun@shaun.com", password: "shaun")
user_one = User.create(first_name: "Coreen", last_name: "Huang", email: "coreen@coreen.com", password: "coreen")
user_one = User.create(first_name: "Nicholas", last_name: "Chau", email: "nicholas@nicholas.com", password: "nicholas")