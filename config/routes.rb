Rails.application.routes.draw do
  post 'auth', to: 'auth#create'
  resource :payment, only: %w[show]
end
