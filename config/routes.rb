Brewfindr::Application.routes.draw do
  root 'app#index'
  resources :beers do
    collection do
      get 'search'
      get 'style'
    end
  end
end
