class Game < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, presence: true, uniqueness: true
    validates :image_url, presence: true
    validates :age_rating, presence: true
    validates :description, presence: true
end
