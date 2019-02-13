class AddUserRefToVehicles < ActiveRecord::Migration[5.2]
  def change
    add_reference :vehicles, :user, foreign_key: true
  end
end
