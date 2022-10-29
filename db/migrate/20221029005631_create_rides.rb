class CreateRides < ActiveRecord::Migration[6.1]
  def change
    create_table :rides do |t|
      t.belongs_to :driver, foreign_key: true
      t.datetime :departure_date_time
      t.string :pickup
      t.string :dropoff
      t.integer :number_of_seats
      t.integer :cost_per_seat
      t.text :description
      t.boolean :allow_pets
      t.boolean :allow_oversize
      t.boolean :allow_skis
      t.boolean :allow_bikes
      t.timestamps
    end
  end
end
