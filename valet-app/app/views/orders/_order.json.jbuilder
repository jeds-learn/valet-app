json.extract! order, :id, :length_of_stay, :tip, :total_price, :order_status, :created_at, :updated_at, :valet_company_name, :start_time, :end_time, :valet_address, :valet_state, :valet_city, :valet_zip, :vehicle_make, :vehicle_license_plate, :customer_first_name, :customer_last_name
json.url order_url(order, format: :json)
