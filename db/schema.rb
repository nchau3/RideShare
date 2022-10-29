# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_29_011035) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "drivers", force: :cascade do |t|
    t.bigint "user_id"
    t.string "car_make"
    t.string "car_model"
    t.string "car_color"
    t.string "licence_plate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_drivers_on_user_id"
  end

  create_table "rides", force: :cascade do |t|
    t.bigint "driver_id"
    t.datetime "departure_date_time"
    t.string "pickup"
    t.string "dropoff"
    t.integer "number_of_seats"
    t.integer "cost_per_seat"
    t.text "description"
    t.boolean "allow_pets"
    t.boolean "allow_oversize"
    t.boolean "allow_skis"
    t.boolean "allow_bikes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["driver_id"], name: "index_rides_on_driver_id"
  end

  create_table "trips", force: :cascade do |t|
    t.bigint "ride_id"
    t.bigint "user_id"
    t.datetime "date_booked"
    t.boolean "is_new", default: true
    t.boolean "is_completed", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ride_id"], name: "index_trips_on_ride_id"
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.boolean "is_driver", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "drivers", "users"
  add_foreign_key "rides", "drivers"
  add_foreign_key "trips", "rides"
  add_foreign_key "trips", "users"
end
