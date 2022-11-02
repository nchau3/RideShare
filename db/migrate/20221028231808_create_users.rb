class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.boolean :is_driver, :default => false, :null => false
      t.timestamps
      t.string :token
    end
  end
end
