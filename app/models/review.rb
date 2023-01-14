class Review < ApplicationRecord
  belongs_to :users
  belongs_to :games

  validates :title, :body, :rating, presence: true
end
