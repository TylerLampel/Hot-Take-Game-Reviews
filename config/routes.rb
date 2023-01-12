Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessons#destroy"

  post "/signup", to: "users#create"
  post "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
