json.array!(user) do |json, user|
  json.(@user, :id)
end
