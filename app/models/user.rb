class User < ApplicationRecord
  has_secure_password
  has_one :driver

  def generate_token
    self.token = ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
    self.save
  end
  
end
