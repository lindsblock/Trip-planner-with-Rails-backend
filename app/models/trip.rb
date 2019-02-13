class Trip < ApplicationRecord
  has_many :flights, dependent: :destroy
end
