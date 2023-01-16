class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating, :game
  has_one :user
  belongs_to :game
end
