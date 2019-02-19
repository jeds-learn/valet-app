class Order < ApplicationRecord
  belongs_to :user
  belongs_to :valet, class_name: "User", foreign_key: "valet_id"
  delegate :cost_per_hour, to: :valet
end
