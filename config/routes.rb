Brewfindr::Application.routes.draw do
  root 'app#index'
  resources :beers do
    collection do
      get 'search'
      get 'style'
    end
  end

  resources :users
  resources :favorites, only: [:create, :destroy, :show]
  resource :session, only: [:new, :create, :destroy]
end
