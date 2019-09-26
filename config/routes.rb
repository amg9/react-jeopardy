Rails.application.routes.draw do
  namespace :api do
    resources :categories
  end
end
