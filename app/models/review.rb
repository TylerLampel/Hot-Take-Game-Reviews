class Review < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :game, optional: true

  validates :title, :body, :rating, presence: true
end
