Rails.application.routes.draw do

  namespace :api do # /api/data

    resources :users, only: [:index]
    resources :rides, only: [:index, :search]

    get '/rides/search', to: 'rides#search'
    get '/rides/:id', to: 'rides#show'

    post '/register', to: 'users#create'
    post '/login', to: 'users#is_user'

    get 'users/:id', to: 'users#show'
    put 'users/:id', to: 'users#update'

    post '/trips/:ride_id/:user_id', to: 'trips#create'
    get 'trips/:user_id', to: 'trips#show'

    get 'drivers/:driver_id', to: 'drivers#show'
    post 'drivers/:driver_id', to: 'drivers#create'


  end

 
  

end
