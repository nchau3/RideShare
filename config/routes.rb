Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/users', to: 'users#index'
  

  namespace :api do # /api/data

    #get '/users', to: 'users#index'

    resources :users, only: [:index]
    resources :rides, only: [:index, :search]

    get '/rides/search', to: 'rides#search'
    get '/rides/:id', to: 'rides#show'

    post '/register', to: 'users#create'
    post '/login', to: 'users#is_user'

    post '/trips/:id', to: 'trips#create'
  end

  #get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #  !request.xhr? && request.format.html?
  #end

  

end
