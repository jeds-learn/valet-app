class AddVehicleIdToOrderTable < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :vehicle_id, :integer
  end
end
