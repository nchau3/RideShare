Rails.application.routes.draw do

  namespace :api do # /api/data

    resources :users, only: [:index]
    resources :rides, only: [:index, :search]

    get '/rides/search', to: 'rides#search'
    get '/rides/:id', to: 'rides#show'
    post '/rides/:driver_id', to 'rides#create'
    delete '/rides/:id', to: 'rides#destroy'
    put '/rides/:driver_id/:ride_id', to 'rides#update'

    post '/register', to: 'users#create'
    post '/login', to: 'users#is_user' 

    get 'users/:id', to: 'users#show'
    put 'users/:id', to: 'users#update'

    post '/trips/:ride_id/:user_id', to: 'trips#create'
    get 'trips/:user_id', to: 'trips#show'

    get 'drivers/:driver_id', to: 'drivers#show'
    get 'drivers/:user_id/:driver_id', to: 'drivers#profile' 
    post 'drivers/:driver_id', to: 'drivers#create'



  end

 
  

end
