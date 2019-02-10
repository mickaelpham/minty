# frozen_string_literal: true

class Bank < ApplicationRecord
  has_many :accounts
end
