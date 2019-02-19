class AddValetIdToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :valet_id, :integer
  end
end
