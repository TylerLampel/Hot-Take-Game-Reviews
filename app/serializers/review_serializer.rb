class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating, :user_id
  belongs_to :user
  belongs_to :game
end
