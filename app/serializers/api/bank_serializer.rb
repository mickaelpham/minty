# frozen_string_literal: true

module API
  class BankSerializer < ApplicationSerializer
    attributes :name, :website
    has_many :accounts
  end
end
