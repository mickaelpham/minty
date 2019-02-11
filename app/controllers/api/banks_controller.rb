# frozen_string_literal: true

module API
  class BanksController < ApplicationController
    # GET /api/banks
    def index
      render json: API::BankSerializer.new(Bank.includes(:accounts))
    end

    # GET /api/banks/:id
    def show
      render json: API::BankSerializer.new(
        Bank.find(params[:id]).includes(:accounts)
      )
    end
  end
end
