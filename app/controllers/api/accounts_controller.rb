# frozen_string_literal: true

module API
  class AccountsController < ApplicationController
    def index
      render json: API::AccountSerializer.new(accounts)
    end

    private

    def accounts
      if (bank_id = params[:bank_id])
        Account.where(bank_id: bank_id)
      else
        Account.all
      end
    end
  end
end
