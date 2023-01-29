class Game < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    scope :by_title, -> {order(title: :asc)}

    validates :title, presence: true, uniqueness: true
    validates :age_rating, :description, presence: true
end
