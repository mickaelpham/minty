# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :accounts, only: %i[index show]

    resources :banks, only: %i[index show]
  end
end
