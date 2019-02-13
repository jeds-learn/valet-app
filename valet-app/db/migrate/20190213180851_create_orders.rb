class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.float :length_of_stay
      t.float :tip
      t.float :total_price
      t.string :order_status

      t.timestamps
    end
  end
end
