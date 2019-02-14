class AddOrderFields < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :start_time, :timestamp
    add_column :orders, :end_time, :timestamp
  end
end
