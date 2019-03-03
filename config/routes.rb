Rails.application.routes.draw do
  get 'auth', to: 'auth#show'
  resource :payment, only: %w[show create]
  resource :card, only: %w[show]
end
