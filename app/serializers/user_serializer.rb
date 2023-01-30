class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :games
  has_many :reviews
  has_many :games, through: :reviews

end
