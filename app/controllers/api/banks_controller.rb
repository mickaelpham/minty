# frozen_string_literal: true

module API
  class BanksController < ApplicationController
    def index
      render json: API::BankSerializer.new(Bank.all)
    end

    def show
      render json: API::BankSerializer.new(Bank.find(params[:id]))
    end
  end
end
