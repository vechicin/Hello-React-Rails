Rails.application.routes.draw do
  root 'greetings#index'
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', :to 'greetings#index'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
