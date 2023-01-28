class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating, :game, :user_id
  has_one :user
  belongs_to :game
end
