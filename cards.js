// 16 Cards for Onitama -- Code borrowed from Christian Barraza
// Functions you can call: CardList.chooseCard(card) use const cardList = new CardList() / cardList.chooseCard('crab')


class CardList {
    constructor () {

        this.cardMoves = {

            'crab' : moveCrab(),
            'eel' : moveEel(),
            'rabbit' : moveRabbit(),
            'crane' : moveCrane(),
            'goose' : moveGoose(),
            'ox' : moveOx(),
            'monkey' : moveMonkey(),
            'tiger' : moveTiger(),
            'rooster' : moveRooster(),
            'frog' : moveFrog(),
            'mantist' : moveMantis(),
            'horse' : moveHorse(),
            'elephant' : moveElephant(),
            'dragon' : moveDragon(),
            'cobra' : moveCobra(),
            'boar' : moveBoar(),
            'bear' : moveBear(),
            'panda' : movePanda(),
            'otter' : moveOtter(),
            'sable' : moveSable(),
            'dog' : moveDog(),
            'fox' : moveFox(),
            'mouse' : moveMouse(),
            'rat' : moveRat(),
            'tanuki' : moveTanuki(),
            'iguana' : moveIguana(),
            'seasnake' : moveSeaSnake(),
            'viper' : moveViper(),
            'giraffe' : moveGiraffe(),
            'kirin' : moveKirin(),
            'phoenix' : movePhoenix(),
            'turtle' : moveTurtle(),
        }

    }

    moveCrab = function()
    { var crab = new MovementCard(currentSquare, -5, -2, 2); };
    
    moveEel = function()
    { var eel = new MovementCard(currentSquare, -6, 1, 4); };
    
    moveRabbit = function()
    { var rabbit = new MovementCard(currentSquare, -4, 2, 4); };
    
    moveCrane = function()
    { var crane = new MovementCard(currentSquare, -5, 4, 6); };
    
    moveGoose = function()
    { var goose = new MovementCard(currentSquare, -6, -1, 1, 6); };
    
    moveOx = function()
    { var ox = new MovementCard(currentSquare, -5, 1, 5); };
    
    moveMonkey = function()
    { var monkey = new MovementCard(currentSquare, -6, -4, 4, 6); };
    
    moveTiger = function()
    { var tiger = new MovementCard(currentSquare, -10, 5); };
    
    moveRooster = function()
    { var rooster = new MovementCard(currentSquare, -4, -1, 1, 4); };
    
    moveFrog = function()
    { var frog = new MovementCard(currentSquare, -6, -2, 6); };
    
    moveMantis = function()
    { var mantis = new MovementCard(currentSquare, -6, -4, 5); };
    
    moveHorse = function()
    { var horse = new MovementCard(currentSquare, -5, -1, 5); };
    
    moveElephant = function()
    { var elephant = new MovementCard(currentSquare, -6, -4, -1, 1); };
    
    moveDragon = function()
    { var dragon = new MovementCard(currentSquare, -7, -3, 4, 6); };
    
    moveCobra = function()
    { var cobra = new MovementCard(currentSquare, -4, -1, 6); };
    
    moveBoar = function()
    { var boar = new MovementCard(currentSquare, -5, -1, 1); };
    
    // New Cards from latest expansion
    moveBear = function()
    { var bear = new MovementCard(currentSquare, -6, -5, 6); };
    
    movePanda = function()
    { var panda = new MovementCard(currentSquare, -5, -4, 4); };
    
    moveOtter = function()
    { var otter = new MovementCard(currentSquare, -6, 2, 6); };
    
    moveSable = function()
    { var sable = new MovementCard(currentSquare, -4, -2, 4); };
    
    moveDog = function()
    { var dog = new MovementCard(currentSquare, -6, -1, 4); };
    
    moveFox = function()
    { var fox = new MovementCard(currentSquare, -4, 1, 6); };
    
    moveMouse = function()
    { var mouse = new MovementCard(currentSquare, -5, 1, 4); };
    
    moveRat = function()
    { var rat = new MovementCard(currentSquare, -5, -1, 6); };
    
    moveTanuki = function()
    { var tanuki = new MovementCard(currentSquare, -5, -3, 4); };
    
    moveIguana = function()
    { var iguana = new MovementCard(currentSquare, -7, -5, 6); };
    
    moveSeaSnake = function()
    { var seaSnake = new MovementCard(currentSquare, -5, 2, 4); };
    
    moveViper = function()
    { var viper = new MovementCard(currentSquare, -5, -2, 6); };
    
    moveGiraffe = function()
    { var giraffe = new MovementCard(currentSquare, -7, -3, 5); };
    
    moveKirin = function()
    { var kirin = new MovementCard(currentSquare, -9, -11, 10); };
    
    movePhoenix = function()
    { var phoenix = new MovementCard(currentSquare, -6, -4, -2, 2); };
    
    moveTurtle= function()
    { var turtle = new MovementCard(currentSquare, -2, 2, 4, 6); };


    // Give chooseCard the card's name to pick which movement can be used.
    chooseCard(card){
    
        return this.cardMoves[card]
    
    }

    shuffleCards() {
        
        getRandomNumber = function(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let randNumber = getRandomNumber(1, 32);
        this.cardNames = [
            {name:$("<div class='movementCard' id='crab'>Crab</div>")},
            {name:$("<div class='movementCard' id='eel'>Eel</div>")}
            {name:$("<div class='movementCard' id='rabbit'>Rabbit</div>")},
            {name:$("<div class='movementCard' id='crane'>Crane</div>")},
            {name:$("<div class='movementCard' id='goose'>Goose</div>")},
            {name:$("<div class='movementCard' id='ox'>Ox</div>")},
            {name:$("<div class='movementCard' id='monkey'>Monkey</div>")},
            {name:$("<div class='movementCard' id='crane'>Tiger</div>")},
            {name:$("<div class='movementCard' id='rooster'>Rooster</div>")},
            {name:$("<div class='movementCard' id='frog'>Frog</div>")},
            {name:$("<div class='movementCard' id='mantis'>Mantis</div>")},
            {name:$("<div class='movementCard' id='horse'>Horse</div>")},
            {name:$("<div class='movementCard' id='elephant'>Elephant</div>")},
            {name:$("<div class='movementCard' id='dragon'>Dragon</div>")},
            {name:$("<div class='movementCard' id='cobra'>Cobra</div>")},
            {name:$("<div class='movementCard' id='boar'>Boar</div>")},
            {name:$("<div class='movementCard' id='bear'>Bear</div>")},
            {name:$("<div class='movementCard' id='panda'>Panda</div>")},
            {name:$("<div class='movementCard' id='otter'>Otter</div>")},
            {name:$("<div class='movementCard' id='sable'>Sable</div>")},
            {name:$("<div class='movementCard' id='dog'>Dog</div>")},
            {name:$("<div class='movementCard' id='fox'>Fox</div>")},
            {name:$("<div class='movementCard' id='mouse'>Mouse</div>")},
            {name:$("<div class='movementCard' id='rat'>Rat</div>")},
            {name:$("<div class='movementCard' id='tanuki'>Tanuki</div>")},
            {name:$("<div class='movementCard' id='iguana'>Iguana</div>")},
            {name:$("<div class='movementCard' id='seasnake'>SeaSnake</div>")},
            {name:$("<div class='movementCard' id='viper'>Viper</div>")},
            {name:$("<div class='movementCard' id='giraffe'>Giraffe</div>")},
            {name:$("<div class='movementCard' id='kirin'>Kirin</div>")},
            {name:$("<div class='movementCard' id='phoenix'>Phoenix</div>")},
            {name:$("<div class='movementCard' id='turtle'>Turtle</div>")},
        ]

        const randomCard = cardNames[randNumber].name;
        return randomCard;
        
    }

    placeCards = function() {
            
        shuffleCards();
        
        $(randomCard).appendTo('#handP1');
        
        shuffleCards();
        
        $(randomCard).appendTo('#handP1');
        
        shuffleCards();
        
        $(randomCard).appendTo('#handP2');
        
        shuffleCards();
        
        $(randomCard).appendTo('#handP2');
        
        shuffleCards();
        
        $(randomCard).appendTo('#next2');
    
    }

    
}


    



