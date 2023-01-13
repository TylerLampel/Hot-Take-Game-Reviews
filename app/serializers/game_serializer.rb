class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :age_rating, :description
end
