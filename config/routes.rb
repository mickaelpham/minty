# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :banks, only: %i[index show] do
      resources :accounts, only: %i[index]
    end

    resources :accounts, only: %i[index show]
  end
end
