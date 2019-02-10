# frozen_string_literal: true

class Account < ApplicationRecord
  belongs_to :bank
  enum kind: %i[checking savings credit_card]
end
