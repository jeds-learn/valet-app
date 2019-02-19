Rails.application.routes.draw do
  resources :orders
  resources :vehicles
  devise_for :users

  # resources :users, constraints: ->(request){ !request.format.html? }
  #All html traffic via single page app
  post "/users/create" => "users#create", :as => "create_user_page"
  get "/users/valets" => "users#get_valet", :as => "list_of_valets"
  get "/users/valet/:id" => "users#get_a_valet", :as => "a_of_valets"
  get '*path', to: 'pages#main', constraints: ->(request){ request.format.html? }
  #Forces you to home page
  root to: 'pages#main'



end
