class Game < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, presence: true, uniqueness: true
    validates :image_url, :age_rating, :description, presence: true
end
