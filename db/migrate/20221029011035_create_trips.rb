class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.integer :ride_id, foreign_key: true
      t.integer :user_id, foreign_key: true
      t.datetime :date_booked
      t.boolean :is_new, :default => true
      t.boolean :is_completed, :default => false
      t.timestamps
    end
  end
end
