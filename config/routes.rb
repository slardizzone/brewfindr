Brewfindr::Application.routes.draw do
  root 'app#index'
  resources :beer do
    collection do
      get 'search'
    end
  end
end
