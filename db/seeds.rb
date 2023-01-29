# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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

User.create!([{
    username: "tyler",
    password: "123"
},
{
    username: "bob",
    password: "bob"
},
{
    username: "sue",
    password: "sue"
},
{
    username: "123",
    password: "123"
}])


Review.create!([{
    title: "Very Good Game",
    body: "I love this game!! I've been playing OSRS since 2007! Can't get enough of it!",
    rating: 5,
    user_id:1,
    game_id: 1
},
{
    title: "Love this game",
    body: "Can't play it enough",
    rating: 5,
    user_id: 2,
    game_id: 2
},
{
    title: "do not recommend",
    body: "so boring",
    rating: 1,
    user_id: 3,
    game_id: 1
},
{
    title: "this was okay",
    body: "i still play this game but i am trying to git gud",
    rating: 3,
    user_id: 4,
    game_id: 3
},
{
    title: "Kid's game",
    body: "Can't play anymore. Always get killed by 12 year olds.",
    rating: 2,
    user_id: 1,
    game_id: 2
},
{
    title: "AMAZING",
    body: "I LOVE EVERY ITERATION OF COD.",
    rating: 5,
    user_id: 2,
    game_id: 3
},
{
    title: "Very Grindy Game",
    body: "Very nostalgic, and always fun to play! Gets boring very fast.",
    rating: 4,
    user_id: 3,
    game_id: 1
},
{
    title: "Always enjoy playing",
    body: "play it all the time",
    rating: 5,
    user_id: 4,
    game_id: 2
},
{
    title: "good enough",
    body: "it is okay, just another COD",
    rating: 3,
    user_id: 1,
    game_id: 3
}])


u = User.first
u.reviews.create!({
    title: "yes",
    body: "I love this game!",
    rating: 5,
    game_id: 1
})

