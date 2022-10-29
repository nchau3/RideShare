class Driver < ApplicationRecord
  belongs_to :user
  has_many :rides
end
