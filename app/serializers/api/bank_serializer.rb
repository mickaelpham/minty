# frozen_string_literal: true

module API
  class BankSerializer < ApplicationSerializer
    attributes :name, :website
  end
end
