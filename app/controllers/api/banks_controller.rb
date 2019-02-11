# frozen_string_literal: true

module API
  class BanksController < ApplicationController
    # GET /api/banks
    def index
      render json: API::BankSerializer.new(Bank.all)
    end

    # GET /api/banks/:id
    def show
      render json: API::BankSerializer.new(Bank.find(params[:id]))
    end
  end
end
