class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :title, :body, :rating, presence: true
end
