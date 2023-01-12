class User < ApplicationRecord
    has_many :reviews
    has_many :games, through: :reviews

    has_secure_passowrd

    validates :username, presence: true, uniqueness: true
end
