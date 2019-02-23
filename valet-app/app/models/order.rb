class Order < ApplicationRecord
  belongs_to :user
  belongs_to :valet, class_name: "User", foreign_key: "valet_id"
  belongs_to :customer, class_name: "User", foreign_key: "user_id"
  belongs_to :vehicle, class_name: "Vehicle", foreign_key: "vehicle_id"
  delegate :cost_per_hour, to: :valet
  delegate :company_name, to: :valet, prefix:true
  delegate :address, to: :valet, prefix:true
  delegate :city, to: :valet, prefix:true
  delegate :state, to: :valet, prefix:true
  delegate :zip, to: :valet, prefix:true
  delegate :make, to: :vehicle, prefix:true
  delegate :license_plate, to: :vehicle, prefix:true
  delegate :first_name, to: :customer, prefix:true
  delegate :last_name, to: :customer, prefix:true

end
