# FFDex Api
FFDex Api is a database for all kinds of information on Final Fantasy (inspired by PokeAPI).

## Why build this?
I made the FFDex Api because I initially wanted to build something similar to a pokedex application
but with Final Fantasy characters. I could not find any REST APIs in the wild that gave me the kind 
of data and formatting I was looking for and decided to make the REST API I would have wanted to make
my application.

## Simple to get started!

Various end points for characters from the series, monsters, and games!

[https://ff-dex.herokuapp.com/api/characters](https://ff-dex.herokuapp.com/api/characters)

[https://ff-dex.herokuapp.com/api/monsters](https://ff-dex.herokuapp.com/api/monsters)

[https://ff-dex.herokuapp.com/games](https://ff-dex.herokuapp.com/games)

## Add query paramaters to filter out the data you request!

[https://ff-dex.herokuapp.com/api/characters?name=Cloud Strife](<https://ff-dex.herokuapp.com/api/characters?name=Cloud Strife>)

[https://ff-dex.herokuapp.com/api/characters?origin=Final Fantasy 7](<https://ff-dex.herokuapp.com/api/characters?origin=Final Fantasy 7>)

**For now query params are only supported on character controller for name, origin, and gender.**

## Character Properties

  - Name
  - Origin
  - Age
  - Signature Weapon
  - Description
  - Pictures
  
## Monster Properties

  - Name
  - Origin
  - Description
  - Pictures
  
## Character Properties

  - Name
  - Release Date
  - Description
  - Pictures
