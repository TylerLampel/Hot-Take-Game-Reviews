class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :age_rating, :description, :image_url
end
