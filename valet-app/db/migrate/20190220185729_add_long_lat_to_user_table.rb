class AddLongLatToUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :long, :string
    add_column :users, :lat, :string
  end
end
