Rails.application.routes.draw do
  root 'static#index'
  namespace :v1, defaults: { format: :json } do
    get 'greetings', to: 'greetings#index'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*page', to:'static#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
   }
end
