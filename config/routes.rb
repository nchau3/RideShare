Rails.application.routes.draw do
  namespace :api do
    get 'trips/index'
  end
  namespace :api do
    get 'rides/index'
  end
  namespace :api do
    get 'drivers/index'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/users', to: 'users#index'

  namespace :api do # /api/data

    #get '/users', to: 'users#index'

    resources :users, only: [:index]

  end

  #get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #  !request.xhr? && request.format.html?
  #end

  

end
