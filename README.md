# Onitama
Japanese Chess Game

## Description

Onitama is a two-player game based off the mechanics of chess. It is simplified down to a 5x5 board, both players start with four pawns on their side, with the King in the middle.

Each player has two open cards that each display a possible move for any of his pieces. There is a fifth card that cannot be used by either player. On a player's turn, he chooses one of his cards, moves one of his pieces according to the chosen card, then replaces the card he used with the fifth card. The other player then chooses one of his cards, moves accordingly, and exchanges that card with this fifth card — which is, of course, the card the first player just used.

Moving onto one of the opponent's pawns removes that pawn from the game. Taking the opponent's main pawn, or moving your main pawn into your opponent's main pawn's starting space, wins you the game.


## Support
@mnotley or @rhartendorp

## Roadmap
Building Onitama should be broken down into components which can be put together to create the game. By doing this we eliminate unnecessary dependencies that could block or slow down coding the project. Going off of TrippW’s implementation of the game in Git and this implementation we can see what the breakdown of the components will look like for us.


### Components

Board, Cards, Deck of Cards, Pieces, Player, GUI, Board including pieces, Cards, Onitama Rules, Movements, Menus

