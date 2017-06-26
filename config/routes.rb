Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  get 'about', to: 'pages#about'
  get 'contacts',     to: 'contacts#new'
  get 'gallery', to: 'pages#gallery'
  get 'latest', to: 'pages#latest'
  resources "contacts", only: [:new, :create]
  resources "images"
end
