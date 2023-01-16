class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :age_rating, :description, :image_url

  has_many :reviews
end
