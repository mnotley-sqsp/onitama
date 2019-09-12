// 16 Cards for Onitama -- Code borrowed from Christian Barraza
// Functions you can call: CardList.chooseCard(card) use const cardList = new CardList() / cardList.chooseCard('crab')


class CardList {
    constructor () {

        this.cardMoves = {

            'crab' : this.moveCrab(),
            'eel' : this.moveEel(),
            'rabbit' : this.moveRabbit(),
            'crane' : this.moveCrane(),
            'goose' : this.moveGoose(),
            'ox' : this.moveOx(),
            'monkey' : this.moveMonkey(),
            'tiger' : this.moveTiger(),
            'rooster' : this.moveRooster(),
            'frog' : this.moveFrog(),
            'mantist' : this.moveMantis(),
            'horse' : this.moveHorse(),
            'elephant' : this.moveElephant(),
            'dragon' : this.moveDragon(),
            'cobra' : this.moveCobra(),
            'boar' : this.moveBoar(),
            'bear' : this.moveBear(),
            'panda' : this.movePanda(),
            'otter' : this.moveOtter(),
            'sable' : this.moveSable(),
            'dog' : this.moveDog(),
            'fox' : this.moveFox(),
            'mouse' : this.moveMouse(),
            'rat' : this.moveRat(),
            'tanuki' : this.moveTanuki(),
            'iguana' : this.moveIguana(),
            'seasnake' : this.moveSeaSnake(),
            'viper' : this.moveViper(),
            'giraffe' : this.moveGiraffe(),
            'kirin' : this.moveKirin(),
            'phoenix' : this.movePhoenix(),
            'turtle' : this.moveTurtle()
        }

    }

    moveCrab()
    { var crab = new MovementCard(currentSquare, -5, -2, 2); }
    
    moveEel()
    { var eel = new MovementCard(currentSquare, -6, 1, 4); };
    
    moveRabbit()
    { var rabbit = new MovementCard(currentSquare, -4, 2, 4); };
    
    moveCrane()
    { var crane = new MovementCard(currentSquare, -5, 4, 6); };
    
    moveGoose()
    { var goose = new MovementCard(currentSquare, -6, -1, 1, 6); };
    
    moveOx()
    { var ox = new MovementCard(currentSquare, -5, 1, 5); };
    
    moveMonkey()
    { var monkey = new MovementCard(currentSquare, -6, -4, 4, 6); };
    
    moveTiger()
    { var tiger = new MovementCard(currentSquare, -10, 5); };
    
    moveRooster()
    { var rooster = new MovementCard(currentSquare, -4, -1, 1, 4); };
    
    moveFrog()
    { var frog = new MovementCard(currentSquare, -6, -2, 6); };
    
    moveMantis()
    { var mantis = new MovementCard(currentSquare, -6, -4, 5); };
    
    moveHorse()
    { var horse = new MovementCard(currentSquare, -5, -1, 5); };
    
    moveElephant()
    { var elephant = new MovementCard(currentSquare, -6, -4, -1, 1); };
    
    moveDragon()
    { var dragon = new MovementCard(currentSquare, -7, -3, 4, 6); };
    
    moveCobra()
    { var cobra = new MovementCard(currentSquare, -4, -1, 6); };
    
    moveBoar()
    { var boar = new MovementCard(currentSquare, -5, -1, 1); };
    
    // New Cards from latest expansion
    moveBear()
    { var bear = new MovementCard(currentSquare, -6, -5, 6); };
    
    movePanda()
    { var panda = new MovementCard(currentSquare, -5, -4, 4); };
    
    moveOtter()
    { var otter = new MovementCard(currentSquare, -6, 2, 6); };
    
    moveSable()
    { var sable = new MovementCard(currentSquare, -4, -2, 4); };
    
    moveDog()
    { var dog = new MovementCard(currentSquare, -6, -1, 4); };
    
    moveFox()
    { var fox = new MovementCard(currentSquare, -4, 1, 6); };
    
    moveMouse()
    { var mouse = new MovementCard(currentSquare, -5, 1, 4); };
    
    moveRat()
    { var rat = new MovementCard(currentSquare, -5, -1, 6); };
    
    moveTanuki()
    { var tanuki = new MovementCard(currentSquare, -5, -3, 4); };
    
    moveIguana()
    { var iguana = new MovementCard(currentSquare, -7, -5, 6); };
    
    moveSeaSnake()
    { var seaSnake = new MovementCard(currentSquare, -5, 2, 4); };
    
    moveViper()
    { var viper = new MovementCard(currentSquare, -5, -2, 6); };
    
    moveGiraffe()
    { var giraffe = new MovementCard(currentSquare, -7, -3, 5); };
    
    moveKirin()
    { var kirin = new MovementCard(currentSquare, -9, -11, 10); };
    
    movePhoenix()
    { var phoenix = new MovementCard(currentSquare, -6, -4, -2, 2); };
    
    moveTurtle= function()
    { var turtle = new MovementCard(currentSquare, -2, 2, 4, 6); };


    

    // Give chooseCard the card's name to pick which movement can be used.
    chooseCard(card){
    
        return this.cardMoves[card]
    
    }
// Shuffle Cards
    shuffleCards() {
        
        getRandomNumber = function(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let randNumber = getRandomNumber(1, 32);
        this.cardNames = [
            {name:$("<div class='movementCard' id='crab'>Crab</div>")},
            {name:$("<div class='movementCard' id='eel'>Eel</div>")},
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


    



