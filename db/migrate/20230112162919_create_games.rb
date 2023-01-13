class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :image_url
      t.string :age_rating
      t.text :description


      t.timestamps
    end
  end
end
