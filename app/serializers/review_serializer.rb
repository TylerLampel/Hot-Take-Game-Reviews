class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating
  has_one :user
end
