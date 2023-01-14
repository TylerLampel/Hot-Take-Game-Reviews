# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Game.destroy_all

Game.create!([{
    title: "Old School RuneScape",
    image_url: "https://www.runescape.com/img/rsp777/social-share-fb.jpg?1",
    age_rating: "13+",
    description: "Old School RuneScape is an MMORPG with adventure elements. It features a persistent world in which players can interact with each other and the environment. The basic mechanics are largely the same as RuneScape on 10 August 2007. The player controls a single (human) character and can interact with NPCs, objects, and entities in the game world by left-clicking, or selecting an option from the object's right-click menu, since many objects can offer more than one interaction option. Users can gain experience points (exp.) and level up individual skills, making their playable character more powerful or more capable of using that skill."
},
{
    title: "Fortnite",
    image_url: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0200/wy3SIGJqFW7nz1r0Wi48PbbL.png",
    age_rating: "13+",
    description: "Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight."
},
{
    title: "Call of Duty: Modern Warfare II",
    image_url: "https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg",
    age_rating: "18+",
    description: "Like its predecessor, the game takes place in a realistic and modern setting. The campaign follows multinational unit Task Force 141 and Mexican Special Forces unit Los Vaqueros as they attempt to track down Iranian Quds Force major and terrorist Hassan Zyani, who is in possession of American-made ballistic missiles. The game's main playable characters are John 'Soap' MacTavish and Kyle 'Gaz' Garrick of Task Force 141. Running on a new version of the IW engine, multiplayer mode supports cross-platform multiplayer and features a free-to-play battle royale mode, Warzone 2.0, a follow-up to the original Warzone."
}])

# Review.destroy_all

# Review.create!([{
#     title: "Very Good Game",
#     body: "I love this game!! I've been playing OSRS since 2007! Can't get enough of it!",
#     rating: 5,
#     user_id: 1,
#     game_id: 1
# },
# {
#     title: "Love this game",
#     body: "Can't play it enough",
#     rating: 5,
#     user_id: 1,
#     game_id: 2
# }])

# User.destroy_all

# User.create!([{
#     username: "tyler",
#     password_digest: "123"
# }])