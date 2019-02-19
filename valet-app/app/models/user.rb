class User < ApplicationRecord
  #A customer has many orders
  has_many :orders

  #A customer has many vehicles
  has_many :vehicles

  #current_user.valet_orders return me all the orders assoiciated with that valet
  has_many :valet_orders, class_name: "Order", foreign_key: "valet_id"

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
