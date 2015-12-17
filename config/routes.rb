Rails.application.routes.draw do
  root "app#index"
  #match all routes
  get '/char/:id', to: 'api/characters#character_profile'
  match '*path', to: 'app#sink', via: [:get]
end
