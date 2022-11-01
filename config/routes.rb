Rails.application.routes.draw do

  get '/manifest.json', to:'application#index'

  namespace :api do # /api/data

    #get '/users', to: 'users#index'

    resources :users, only: [:index]
    resources :rides, only: [:index, :search]

    get '/rides/search', to: 'rides#search'
    get '/rides/:id', to: 'rides#show'
  end  

end
