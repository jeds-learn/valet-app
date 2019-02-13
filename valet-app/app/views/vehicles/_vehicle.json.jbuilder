json.extract! vehicle, :id, :license_plate, :make, :model, :color, :created_at, :updated_at
json.url vehicle_url(vehicle, format: :json)
