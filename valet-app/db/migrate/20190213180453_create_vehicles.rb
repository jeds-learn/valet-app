class CreateVehicles < ActiveRecord::Migration[5.2]
  def change
    create_table :vehicles do |t|
      t.string :license_plate
      t.string :make
      t.string :model
      t.string :color

      t.timestamps
    end
  end
end
