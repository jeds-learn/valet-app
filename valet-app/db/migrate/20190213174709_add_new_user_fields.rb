class AddNewUserFields < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone, :integer
    add_column :users, :opening_time, :string
    add_column :users, :closing_time, :string
    add_column :users, :address, :string
    add_column :users, :state, :string
    add_column :users, :city, :string
    add_column :users, :zip, :string
    add_column :users, :cost_per_hour, :float
    add_column :users, :is_valet, :boolean
  end
end
