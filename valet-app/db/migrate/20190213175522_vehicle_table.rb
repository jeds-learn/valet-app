class VehicleTable < ActiveRecord::Migration[5.2]
  def change
    add_column :vehicle, :is_valet, :string
  end
end
