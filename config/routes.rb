Rails.application.routes.draw do

  namespace :api do # /api/data

    resources :users, only: [:index]
    resources :rides, only: [:index, :search]

    get '/rides/search', to: 'rides#search'
    get '/rides/:id', to: 'rides#show'

    post '/register', to: 'users#create'
    post '/login', to: 'users#is_user'

    post '/trips/:id', to: 'trips#create'

    get 'users/:id', to: 'users#show'
    put 'users/:id', to: 'users#update'

  end

 
  

end
