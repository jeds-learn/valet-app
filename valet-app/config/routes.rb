Rails.application.routes.draw do
  # devise_for :users

  # resources :apartments, constraints: ->(request){ !request.format.html? }
  #All html traffic via single page app
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  #Forces you to home page
  root to: 'pages#index'



end
