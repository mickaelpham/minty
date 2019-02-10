# frozen_string_literal: true

module API
  class AccountSerializer < ApplicationSerializer
    attributes :name, :number, :kind, :bank_id
  end
end
