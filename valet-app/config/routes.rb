Rails.application.routes.draw do
  resources :orders
  resources :vehicles
  devise_for :users

  # resources :apartments, constraints: ->(request){ !request.format.html? }
  #All html traffic via single page app
  get '*path', to: 'pages#main', constraints: ->(request){ request.format.html? }
  #Forces you to home page
  root to: 'pages#main'



end
