Rails.application.routes.draw do
  resources :orders
  resources :vehicles
  # devise_for :users

  # resources :users, constraints: ->(request){ !request.format.html? }
  #All html traffic via single page app
  post 'users/new', to: 'users#create',
  get '*path', to: 'pages#main', constraints: ->(request){ request.format.html? }
  #Forces you to home page
  root to: 'pages#main'



end
