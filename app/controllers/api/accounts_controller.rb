# frozen_string_literal: true

module API
  class AccountsController < ApplicationController
    # GET /api/accounts
    def index
      render json: API::AccountSerializer.new(Account.all)
    end

    # GET /api/accounts/:id
    def show
      render json: API::AccountSerializer.new(Account.find(params[:id]))
    end
  end
end
