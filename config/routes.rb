Rails.application.routes.draw do
  get 'auth', to: 'auth#show'
  resource :payment, only: %w[show]
end
