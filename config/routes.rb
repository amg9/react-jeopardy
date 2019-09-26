Rails.application.routes.draw do
  namespace :api do
    resources :categories 
    resources :cards
  end
end
