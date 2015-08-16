Rails.application.routes.draw do
  root "app#index"
  get '/char', to: 'app#character'
  get '/char/:id', to: 'app#character_profile'

  #match all routes
  match '*path', to: 'app#sink', via: [:get]
end
