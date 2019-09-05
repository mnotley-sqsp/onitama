// Code by Christian Barraza

$(function() 
{
    // An array of the orange (P2/human) pieces. To access a piece with Jquery, use $(orangePieces[x]);
    orangePieces = ['#student4', '#student5', '#student6', '#student7', '#master1'];
    
    
    // An array of the orange (P1/A1) pieces. To access a piece with Jquery, use $(bluePieces[x]);
    bluePieces = ['#student0', '#student1', '#student2', '#student3', '#master0'];
    
    // An array of the squares that make up the board; 
    // The top left square is '#square0' and the bottom right square is '#square24';
    squares = ['#square0', '#square1', '#square2', '#square3', '#square4'
        , '#square5', '#square6', '#square7', '#square8', '#square9'
        , '#square10', '#square11', '#square12', '#square13', '#square14'
        , '#square15', '#square16', '#square17', '#square18', '#square19'
        , '#square20', '#square21', '#square22', '#square23', '#square24'];
        
    // Used to calculate how many squares a piece should travel;
    // See the function intialSquare() for more information on currentSqauare;
    var currentSquare; 
    
    // Used to figure out which card was just clicked and how a piece should move;
    // See the function drag() for more information on nextMove;
    var nextMove;
    
    // Store randomly chosen card;
    var chosenCard;
        
    // Store a randomly chosen piece;
    var chosenPiece;
    
    // Store a piece chosen by the player;
    var selectedPiece;
    
    // Tracks if a piece has been selected;
    var isSelected = false;
    
    // Tracks who's turn it is;
    var yourTurn = true;
    
    // Track cards to be shuffled in at the beginning of the game;
    var randomCard;
    
    // Track how many times the computer has searched for a new move;
    var attempts = 0;
    
    // The higher this number, the higher the chances of the computer taking your piece;
    var attemptLimit = 300;
    
    var moveCount = 1;
    
    var score;
    
    var resetting = false;
    
    // Reset the game;
    gameReset = function()
    {
        resetting = true;
        
        isSelected = false;
        
        moveCount = 1;
        
        attempts = 0;
        
        attemptLimit = 100;
        
        // Remove all game pieces and cards;
        $('.square').children('div').remove();
        
        $('.movementCard').remove();
        
        // Append appropriate pieces to their appriate squares;
        $("<div class='studentP1' id='student0'> </div>").appendTo('#square0');
        
        $("<div class='studentP1' id='student1'> </div>").appendTo('#square1');
        
        $("<div class='masterP1' id='master0'> </div>").appendTo('#square2');
        
        $("<div class='studentP1' id='student2'> </div>").appendTo('#square3');
        
        $("<div class='studentP1' id='student3'> </div>").appendTo('#square4');
        
        $("<div class='studentP2' id='student4'> </div>").appendTo('#square20');
        
        $("<div class='studentP2' id='student5'> </div>").appendTo('#square21');
        
        $("<div class='masterP2' id='master1'> </div>").appendTo('#square22');
        
        $("<div class='studentP2' id='student6'> </div>").appendTo('#square23');
        
        $("<div class='studentP2' id='student7'> </div>").appendTo('#square24');
        
        makeUnmovable();
        
        cardShuffle();
        
        // Allow the human player to choose cards again;
        $('#handP2').css('pointer-events', '');
            
        // Make it your turn again;
        yourTurn = true;
            
        $('#instructions').text('Choose a card from your hand.');
            
        $('#info').text('It is your turn.');
        
        // Handle piece selection
        $('.studentP2').click(selectPiece);
        
        // Handle piece selection
        $('.masterP2').click(selectPiece);
        
        // Handle piece selection
        $('.square').click(dropPiece);
        
        // Make pieces movable once a movement card is chosen;
        $('.movementCard').click(allowMove);
    };
    
    // Calls the appropriate card;
    activateCard = function(card)
    {
        this.card = card;
        
        switch (card)
        {
            case 'dragon':
                
                moveDragon();
                
                break;
            
            case 'boar':
                
                moveBoar();
                
                break;
                
            case 'cobra':
                
                moveCobra();
                
                break;
                
            case 'elephant':
                
                moveElephant();
                
                break;
            
            case 'horse':
                
                moveHorse();
                
                break;
                
            case 'mantis':
                
                moveMantis();
                
                break;                
                
            case 'frog':
                
                moveFrog();
                
                break;
            
            case 'rooster':
                
                moveRooster();
                
                break;
                
            case 'tiger':
                
                moveTiger();
                
                break;
                
            case 'monkey':
                
                moveMonkey();
                
                break;
            
            case 'ox':
                
                moveOx();
                
                break;
                
            case 'goose':
                
                moveGoose();
                
                break;
                
            case 'crane':
                
                moveCrane();
                
                break;
            
            case 'rabbit':
                
                moveRabbit();
                
                break;
                
            case 'eel':
                
                moveEel();
                
                break;                
                
            case 'crab':
                
                moveCrab();
                
                break;
                
            case 'turtle':
                
                moveTurtle();
                
                break;
            
            case 'phoenix':
                
                movePhoenix();
                
                break;
                
            case 'kirin':
                
                moveKirin();
                
                break;
                
            case 'giraffe':
                
                moveGiraffe();
                
                break;
            
            case 'viper':
                
                moveViper();
                
                break;
                
            case 'seaSnake':
                
                moveSeaSnake();
                
                break;                
                
            case 'iguana':
                
                moveIguana();
                
                break;
            
            case 'tanuki':
                
                moveTanuki();
                
                break;
                
            case 'rat':
                
                moveRat();
                
                break;
                
            case 'mouse':
                
                moveMouse();
                
                break;
            
            case 'fox':
                
                moveFox();
                
                break;
                
            case 'dog':
                
                moveDog();
                
                break;
                
            case 'sable':
                
                moveSable();
                
                break;
            
            case 'otter':
                
                moveOtter();
                
                break;
                
            case 'panda':
                
                movePanda();
                
                break;                
                
            case 'bear':
                
                moveBear();
                
                break;
        }
    };
    
    pickCard = function()
    {
        var randomNumber = getRandomNumber(1, 32);
        
        switch (randomNumber)
        {
            case 1:
                
                randomCard = $("<div class='movementCard' id='crab'>Crab</div>");
                
                break;
            
            case 2:
                
                randomCard = $("<div class='movementCard' id='rabbit'>Rabbit</div>");
                
                break;
                
            case 3:
                
                randomCard = $("<div class='movementCard' id='cobra'>Cobra</div>");
                
                break;
                
            case 4:
                
                randomCard = $("<div class='movementCard' id='dragon'>Dragon</div>");
                
                break;
            
            case 5:
                
                randomCard = $("<div class='movementCard' id='eel'>Eel</div>");
                
                break;
                
            case 6:
                
                randomCard = $("<div class='movementCard' id='goose'>Goose</div>");
                
                break;                
                
            case 7:
                
                randomCard = $("<div class='movementCard' id='ox'>Ox</div>");
                
                break;
            
            case 8:
                
                randomCard = $("<div class='movementCard' id='monkey'>Monkey</div>");
                
                break;
                
            case 9:
                
                randomCard = $("<div class='movementCard' id='tiger'>Tiger</div>");
                
                break;
                
            case 10:
                
                randomCard = $("<div class='movementCard' id='mantis'>Mantis</div>");
                
                break;
            
            case 11:
                
                randomCard = $("<div class='movementCard' id='elephant'>Elephant</div>");
                
                break;
                
            case 12:
                
                randomCard = $("<div class='movementCard' id='boar'>Boar</div>");
                
                break;
                
            case 13:
                
                randomCard = $("<div class='movementCard' id='frog'>Frog</div>");
                
                break;
            
            case 14:
                
                randomCard = $("<div class='movementCard' id='horse'>Horse</div>");
                
                break;
                
            case 15:
                
                randomCard = $("<div class='movementCard' id='rooster'>Rooster</div>");
                
                break;                
                
            case 16:
                
                randomCard = $("<div class='movementCard' id='crane'>Crane</div>");
                
                break;
                
            case 17:
                
                randomCard = $("<div class='movementCard' id='panda'>Panda</div>");
                
                break;
            
            case 18:
                
                randomCard = $("<div class='movementCard' id='bear'>Bear</div>");
                
                break;
                
            case 19:
                
                randomCard = $("<div class='movementCard' id='otter'>Otter</div>");
                
                break;
                
            case 20:
                
                randomCard = $("<div class='movementCard' id='tanuki'>Tanuki</div>");
                
                break;
            
            case 21:
                
                randomCard = $("<div class='movementCard' id='sable'>Sable</div>");
                
                break;
                
            case 22:
                
                randomCard = $("<div class='movementCard' id='fox'>Fox</div>");
                
                break;                
                
            case 23:
                
                randomCard = $("<div class='movementCard' id='dog'>Dog</div>");
                
                break;
            
            case 24:
                
                randomCard = $("<div class='movementCard' id='rat'>Rat</div>");
                
                break;
                
            case 25:
                
                randomCard = $("<div class='movementCard' id='mouse'>Mouse</div>");
                
                break;
                
            case 26:
                
                randomCard = $("<div class='movementCard' id='iguana'>Iguana</div>");
                
                break;
            
            case 27:
                
                randomCard = $("<div class='movementCard' id='seaSnake'>Sea Snake</div>");
                
                break;
                
            case 28:
                
                randomCard = $("<div class='movementCard' id='viper'>Viper</div>");
                
                break;
                
            case 29:
                
                randomCard = $("<div class='movementCard' id='giraffe'>Giraffe</div>");
                
                break;
            
            case 30:
                
                randomCard = $("<div class='movementCard' id='kirin'>Kirin</div>");
                
                break;
                
            case 31:
                
                randomCard = $("<div class='movementCard' id='turtle'>Turtle</div>");
                
                break;                
                
            case 32:
                
                randomCard = $("<div class='movementCard' id='phoenix'>Phoenix</div>");
                
                break;
        }
    };
    
    cardShuffle = function()
    {
        pickCard();
        
        $(randomCard).appendTo('#handP1');
        
        pickCard();
        
        $(randomCard).appendTo('#handP1');
        
        pickCard();
        
        $(randomCard).appendTo('#handP2');
        
        pickCard();
        
        $(randomCard).appendTo('#handP2');
        
        pickCard();
        
        $(randomCard).appendTo('#next2');
    };
    
    checkForWin = function()
    {
        // If the orange Master piece makes it to the blue shrine ('#square2')
        // OR the orange player takes the blue master piece, the orange player wins, and vice-versa;
        
        score = Math.round((1/moveCount) * 1000);
        
        var restart;
        
        if ($('#master1').parents('#square2').length > 0) 
        {
            restart = confirm("You win!" + '\n' + "Press OK to play again with new Movement Cards."  + '\n\n' 
            + "Don't forget to upvote and post how many moves it took you to win!" + '\n\n' + 'Number of moves: ' + moveCount);
            
            if(restart)
            {
                setTimeout(gameReset, 10);
            }
            
            else
            {
                location.replace('https://www.sololearn.com/Profile/4905817');
            }
        }
        
        if ($('#master0').parents('#square22').length > 0 || $('#master1').parents('.square').length === 0)
        {
            alert("You Lose." + '\n' + "Please feel free to try again."  + '\n\n' 
            + "Don't forget to upvote and leave a comment if you enjoyed!" + '\n\n' + 'Number of moves: ' + moveCount);
        }
    };
    
    // Used to allow the player to choose a new piece to move;
    movementSoftReset = function()
    {
         //Turns off a square and resets its colour.
        for (i = 0; i < squares.length; i++)
        {
            $(squares[i]).css('pointer-events', 'none');
                
            $(squares[i]).css('background-color', '');
            
            if($(squares[i]).find('div:first-child').attr('id') === 'student4' || $(squares[i]).find('div:first-child').attr('id') === 'student5' || $(squares[i]).find('div:first-child').attr('id') === 'student6' || $(squares[i]).find('div:first-child').attr('id') === 'student7' || $(squares[i]).find('div:first-child').attr('id') === 'master1')
            {
                $(squares[i]).css('pointer-events', '');
            }
        }
        
        activateCard(nextMove);
        
        // console.log('Choose a piece.');
        $('#instructions').text('Choose your piece to move.');
    };
    
    //Called in the function drop() (When a piece is dropped into a new square);
    movementReset = function()
    {
        //Turns off "allowDrop()" on all squares and resets their colour;
        for (i = 0; i < squares.length; i++)
        {
            $(squares[i]).css('pointer-events', 'none');
                
            $(squares[i]).css('background-color', '');
        }
        
        resetting = false;
        
        // Make it the opponent's turn;
        yourTurn = false;
        
        $('#info').text('Your opponent is moving.');
               
        $('#instructions').text('Your opponent is moving.');
        
        // console.log("Your turn is: " + yourTurn);
    };
    
    // Keeps track of which piece the player has selcted.
    selectPiece = function()
    {
        var _this = $(this);
        
        // Reset the indicators that a piece has been selected for all orange pieces.
        for(i = 0; i <= orangePieces.length; i++)
        {
            $(orangePieces[i]).css('background-color', '#f7a44c');
            
            isSelected = false;
        }
        
        // var selectedPiece becomes id of clicked object if it of the studentP2 or masterP2 class.
        if(_this.attr('class') === 'studentP2' || _this.attr('class') === 'masterP2');
        {
            selectedPiece = _this.attr('id');
            
            // Visually show a piece has been selected.
            $('#' + selectedPiece).css('background-color', '#fff17c');
            
            isSelected = true;
            
            // console.log(isSelected);
        }
        
        // Send to console for debugging.
        // console.log(selectedPiece);
        
        // Determines which card was just clicked by reading the id attribute of the card in '#next1';
        nextMove = $('#next1 div:first-child').attr('id');
        
        movementSoftReset();
        
        // console.log('You chose the ' + nextMove + ' card.');
        // $('#info').text('You have chosen the ' + nextMove + ' card.');
        
        // Checks which card was just played to see how you should move next;
        activateCard(nextMove);
        
        $('#instructions').text('Choose your square.');
    };
    
    dropPiece = function()
    {
        var _this = $(this);
        
        var pieceCheck = _this.find('div:first-child').attr('id');
        
        var otherPieceCheck = _this.attr('id');
        
        var enemyPieceSquare = _this.find('div:parent');
        
        // If square is empty -
        if (_this.attr('class') === 'square' && _this.is(':empty'))
        {
            if (isSelected)
            {
                $('#' + selectedPiece).css('background-color', '#f7a44c');
                
                $('#' + selectedPiece).animateTo('appendTo', "#" + _this.attr('id'));
                    
                isSelected = false;

                $('#next2 div:first-child').appendTo('#handP2');
                
                movementReset();
                
                moveCount += 1;
                
                checkForWin();
        
                // Start the opponent's turn;
                setTimeout(opponentTurn, 1000);
                
                // console.log(_this.attr('id'));
                
                // console.log(isSelected);
                
                // console.log(score);
            }
        }
        
        // If friendly piece or piece square is clicked on.
        if (pieceCheck === 'student4' || pieceCheck === 'student5'
            || pieceCheck === 'student6' || pieceCheck === 'student7'
            || pieceCheck === 'master1' || otherPieceCheck === 'student4'
            || otherPieceCheck === 'student5' || otherPieceCheck === 'student6'
            || otherPieceCheck === 'student7' || otherPieceCheck === 'master1')
        {
            if(isSelected)
            {
                
            }
        }
        
        // If square of enemy piece is clicked;
        if (pieceCheck === 'student0' || pieceCheck === 'student1'
            || pieceCheck === 'student2' || pieceCheck === 'student3'
            || pieceCheck === 'master0')
        {
                if(isSelected)
                {
                
                $("#" + pieceCheck).remove();
                
                $('#' + selectedPiece).css('background-color', '#f7a44c');
                
                $('#' + selectedPiece).animateTo('appendTo', "#" + _this.attr('id'));
                    
                isSelected = false;

                $('#next2 div:first-child').appendTo('#handP2');
                
                // Prepare for next move;                
                movementReset();
                
                moveCount += 1;
                
                checkForWin();
                
                //console.log("You've taken an enemy piece!");
                $('#info').text('You have taken an enemy piece!');
                
                // Start the opponent's turn;
                setTimeout(opponentTurn, 1000);
            }
        }
        
        if (otherPieceCheck === 'student1' || otherPieceCheck === 'student2' 
            || otherPieceCheck === 'student3' || otherPieceCheck === 'student4' 
            || otherPieceCheck === 'master0')
        {
            if(isSelected)
            {
                
                $("#" + pieceCheck).remove();
                
                $('#' + selectedPiece).css('background-color', '#f7a44c');
                
                $('#' + selectedPiece).animateTo('appendTo', "#" + _this.attr('id'));
                    
                isSelected = false;

                $('#next2 div:first-child').appendTo('#handP2');
                
                // Prepare for next move;
                movementReset();
                
                moveCount += 1;
                
                checkForWin();
                
                //console.log("You've taken an enemy piece!");
                $('#info').text('You have taken an enemy piece!');
                
                // Start the opponent's turn;
                setTimeout(opponentTurn, 1000);
            }
        }
    };
    
    getRandomNumber = function(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    // Calculates the initial square a piece is starting from;
    // Used to calculate how many squares a piece should move and determine possible destination squares;
    initialSquare = function()
    {
        // Get the id attribute of the piece's square;
        currentSquare = $(this).parent('div').attr('id');
        
        // Finds currentSquare in squares[] and assigns it to currentSquare;
        currentSquare = squares.indexOf("#" + currentSquare);
        
        // Send to console for debugging;
        // console.log("Initial Square: " + squares[currentSquare]);
        
        return currentSquare;
    };
    
    makeUnmovable = function()
    {
        for (i = 0; i <= squares.length; i++)
        {
            $(squares[i]).css('pointer-events', 'none');
        }
    };
    
    // Makes the orange pieces selectable;
    // The allowMove() function is called by a MovementCard object;
    allowMove = function()
    {
        for (i = 0; i <= squares.length; i++)
        {
            if(!$(squares[i]).is(':empty'))
            {
                $(squares[i]).css('pointer-events', '');
            }
        }
        
        for(i = 0; i < orangePieces.length; i++)
        {
            // Call intitalSquare() to determine destination squares on mousedown();
            $(orangePieces[i]).mousedown(initialSquare);
            
            // Keep the player from choosing a second card until this card resolves;
            $('#handP2').css('pointer-events', 'none');
        }
        
        // Once a move is allowed (a MovementCard object is clicked on) move the MovementCard object to '#next1';
        $(this).appendTo("#next1");
        
        // console.log("Choose your piece.");
        $('#instructions').text('Choose your piece to move.');
    };
    
    // Moves the opponent. Function is called in the opponentTurn() function.
    opponentMove = function(card, piece)
    {
        this.card = card;
        
        this.piece = piece;
        
        // Checking the id of the carad chosen by the AI and moved appropriately;
        activateCard(card.attr('id'));
    };
    
    // Controls the opponent's (P1/AI) turn;
    opponentTurn = function()
    {
        // Get the first card in the opponent's hand;
        var card1 = $('#handP1 div:nth-child(1)');
        
        // Get the second card in the opponent's hand;
        var card2 = $('#handP1 div:nth-child(2)');
        
        // Get a random number of 1 or 2;
        var chooseCard = getRandomNumber(1, 2);
        
        var tries = 0;
        
        var tryLimit = 100;
        
        // Choose a card;
        switch(chooseCard)
        {
            case 1: 
                
                chosenCard = card1;
                
                break;
                
            case 2: 
                
                chosenCard = card2;
                
                break;
        }
        
        choosePiece = function()
        {
            // Get a random number of 1, 2, 3, 4, or 5;
            var choosePiece = getRandomNumber(1, 5);
            
            // Choose a piece;
            switch (choosePiece)
            {
                case 1: 
                
                    chosenPiece = $(bluePieces[0]);
                
                    break;
            
                case 2: 
                
                    chosenPiece = $(bluePieces[1]);
                
                    break;
                
                case 3: 
                
                    chosenPiece = $(bluePieces[2]);
                
                    break;
                
                case 4: 
                
                    chosenPiece = $(bluePieces[3]);
                
                    break;
                
                case 5: 
                
                    chosenPiece = $(bluePieces[4]);
                
                    break;
            }
            
            if(chosenPiece.attr('id') === undefined && tries < tryLimit)
            {
                // console.log ("Choosing a new piece.");
                
                tries +=1;
                
                this.choosePiece();
            }
        }
        
        if ($('#master0').parents('.square').length === 1 || $('#student0').parents('.square').length === 1 
        || $('#student1').parents('.square').length === 1 || $('#student2').parents('.square').length === 1 
        || $('#student3').parents('.square').length === 1)
        {
            choosePiece();
            
            // console.log("Opponent chose: " + chosenCard.attr('id'));
            
            // console.log("Opponent chose: " + chosenPiece.attr('id'));
            
            // Calculates the initial square for the opponent pieces;
            chosenPiece.click(initialSquare);
                
            chosenPiece.trigger('click');
            
            // Call opponentMove() with the randomly chosen card and randomly chosenPiece();
            opponentMove(chosenCard, chosenPiece);
            
            tries = 0;
        }
        
        if(!resetting)
        {
            // Move chosen card to '#next2' div;
            $(chosenCard).appendTo("#next2");    
        }
        
        for (i = 0; i < squares.length; i++)
        {
                
            $(squares[i]).css('background-color', '');
        }
            
        // Move card from '#next1' to opponent's hand;
        $('#next1 div:first-child').appendTo('#handP1');
            
        // Allow the human player to choose cards again;
        $('#handP2').css('pointer-events', '');
        
        resetting = false;
            
        // Make it your turn again;
        yourTurn = true;
            
        $('#instructions').text('Choose a card from your hand.');
            
        $('#info').text('It is your turn.');
            
        // console.log("Your turn is: " + yourTurn);

    };
    
    // The blueprint for the MovementCard object;
    function MovementCard(start)
    {
        // The start arguement should use the 'currentSquare' variable;
        this.start = start;
        
        if (yourTurn)
        {
            for(i = 1; i < arguments.length; i++)
            {
                //Prevents overlapping or underlapping on the far left rank
                if (start === 0 || start === 5 || start === 10 || start === 15 || start === 20 )
                {
                    if (arguments[i] !== -12 && arguments[i] !== -11
                        && arguments[i] !== -7 && arguments[i] !== -6
                        && arguments[i] !== -2 && arguments[i] !== -1
                        && arguments[i] !== 3  && arguments[i] !== 4
                        && arguments[i] !== 8  && arguments[i] !== 9)
                    {
                        // Allow movement to these squares and highlight them;
                        $(squares[arguments[i] + start]).css('pointer-events', '');
                    
                        $(squares[arguments[i] + start]).css('background-color', '#f44242');
                    }
                }
            
                //Prevent overlapping or underlapping on the second-left rank
                if (start === 1 || start === 6 || start === 11 || start === 16 || start === 21)
                {
                    if (arguments[i] !== -7 && arguments[i] !== -2
                        && arguments[i] !== 3 && arguments[i] !== 8)
                    {
                        // Allow movement to these squares and highlight them;
                        $(squares[arguments[i] + start]).css('pointer-events', '');
                    
                        $(squares[arguments[i] + start]).css('background-color', '#f44242');
                    }
                }
            
                // Arguments are taken at face value if pieces are in the center rank
                if (start === 2 || start === 7 || start === 12 || start === 17 || start === 22)
                {
                    // Allow movement to these squares and highlight them;
                        $(squares[arguments[i] + start]).css('pointer-events', '');
                    
                        $(squares[arguments[i] + start]).css('background-color', '#f44242');
                }
            
                // Prevent overlapping or underlapping on the second-right rank
                if (start === 3 || start === 8 || start === 13 || start === 18 || start === 23)
                {
                    if (arguments[i] !== 7 && arguments[i] !== 2
                        && arguments[i] !== -3 && arguments[i] !== -8)
                    {
                        // Allow movement to these squares and highlight them;
                        $(squares[arguments[i] + start]).css('pointer-events', '');
                    
                        $(squares[arguments[i] + start]).css('background-color', '#f44242');
                    }
                }
            
                // Prevent overlapping or underlapping on the right rank
                if (start === 4 || start === 9 || start === 14 || start === 19 || start === 24 )
                {
                    if (arguments[i] !== 12 && arguments[i] !== 11
                        && arguments[i] !== 7 && arguments[i] !== 6
                        && arguments[i] !== 2 && arguments[i] !== 1
                        && arguments[i] !== -3  && arguments[i] !== -4
                        && arguments[i] !== -8  && arguments[i] !== -9)
                    {
                        // Allow movement to these squares and highlight them;
                        $(squares[arguments[i] + start]).css('pointer-events', '');
                    
                        $(squares[arguments[i] + start]).css('background-color', '#f44242');
                    }
                }
            }
        }
        
        // If not your turn, choose a random square for the opponent to move to and move it;
        if (!yourTurn)
        {
            // Choose a random integer based on how many aruments the MovementCard object has;
            var chooseSquare =  getRandomNumber(1, arguments.length - 1);
            
            // Var chosenSquare becomes a random argument;
            var chosenSquare = arguments[chooseSquare];
            
            // Multiply the argument by -1 to reverse it;
            chosenSquare *= -1;
            
            // Checks to see if a friendly piece is in the square;
            var pieceCheck = $(squares[start + chosenSquare]).find('div:first-child').attr('id');
            
            // console.log(pieceCheck);
            
            // console.log(chosenSquare);
            
            // Prevent overlapping or underlapping on the far left rank;
            if (start === 0 || start === 5 || start === 10 || start === 15 || start === 20 )
            {
                if (pieceCheck === undefined && attempts < attemptLimit)
                {
                    attempts += 1;
                    
                    opponentTurn();
                }
                
                else if (chosenSquare !== -12 && chosenSquare !== -11
                    && chosenSquare !== -7 && chosenSquare !== -6
                    && chosenSquare !== -2 && chosenSquare !== -1
                    && chosenSquare !== 3  && chosenSquare !== 4
                    && chosenSquare !== 8  && chosenSquare !== 9 
                    && squares[start + chosenSquare] !== undefined
                    && pieceCheck !== 'student0' && pieceCheck !== 'student1' 
                    && pieceCheck !== 'student2' && pieceCheck !== 'student3'
                    && pieceCheck !== 'master0')
                {
                    // Check for orange piece and remove it from the game if it is landed on;
                    if (pieceCheck === 'student4' || pieceCheck === 'student5'
                        || pieceCheck === 'student6' || pieceCheck === 'student7'
                        || pieceCheck === 'master1')
                    {
                        $('#' + pieceCheck).remove();
                        
                        // console.log ('You lost a piece!');
                        $('#info').text('You have lost a piece!');
                    }
                    
                    attempts = 0;
                    
                    // Moves the piece;
                    chosenPiece.animateTo('appendTo', squares[start + chosenSquare]);
                    
                    checkForWin();
                        
                    // console.log("Opponent moved to " + squares[start + chosenSquare]);
                }
                    
                else 
                {
                    // console.log ("Invalid move. Trying again");
                        
                    opponentTurn();
                }
            }
    
            // Prevent overlapping or underlapping on the second-left rank;
            if (start === 1 || start === 6 || start === 11 || start === 16 || start === 21)
            {
                if (pieceCheck === undefined && attempts < attemptLimit)
                {
                    attempts += 1;
                    
                    opponentTurn();
                }
                
                else if (chosenSquare !== -7 && chosenSquare !== -2
                    && chosenSquare !== 3 && chosenSquare !== 8
                    && squares[start + chosenSquare] !== undefined
                    && pieceCheck !== 'student0' && pieceCheck !== 'student1' 
                    && pieceCheck !== 'student2' && pieceCheck !== 'student3'
                    && pieceCheck !== 'master0')
                {
                    
                    // Check for orange piece and remove it from the game if it is landed on;
                    if (pieceCheck === 'student4' || pieceCheck === 'student5'
                        || pieceCheck === 'student6' || pieceCheck === 'student7'
                        || pieceCheck === 'master1')
                    {
                        $('#' + pieceCheck).remove();
                        
                        // console.log ('You lost a piece!');
                        $('#info').text('You have lost a piece!');
                    }
                    
                    attempts = 0;
                
                    // Moves the piece;
                    chosenPiece.animateTo('appendTo', squares[start + chosenSquare]);
                    
                    checkForWin();
                    
                    // console.log("Opponent moved to " + squares[start + chosenSquare]);
                }
                
                else 
                {
                    // console.log ("Invalid move. Trying again");
                    
                    opponentTurn();
                }
            }
            
            // Arguments are taken at face value if pieces are in the center rank;
            if (start === 2 || start === 7 || start === 12 || start === 17 || start === 22)
            {
                if (pieceCheck === undefined && attempts < attemptLimit)
                {
                    attempts += 1;
                    
                    opponentTurn();
                }
                
                // Checks to see if the new destination square exist;
                else if(squares[start + chosenSquare] !== undefined
                    && pieceCheck !== 'student0' && pieceCheck !== 'student1' 
                    && pieceCheck !== 'student2' && pieceCheck !== 'student3'
                    && pieceCheck !== 'master0')
                {
                    // Check for orange piece and remove it from the game if it is landed on;
                    if (pieceCheck === 'student4' || pieceCheck === 'student5'
                        || pieceCheck === 'student6' || pieceCheck === 'student7'
                        || pieceCheck === 'master1')
                    {
                        $('#' + pieceCheck).remove();
                        
                        //console.log ('You lost a piece!');
                        $('#info').text('You have lost a piece!');
                    }
                    
                    attempts = 0;
                    
                    // Moves the piece;
                    chosenPiece.animateTo('appendTo', squares[start + chosenSquare]);
                    
                    checkForWin();
                        
                    // console.log("Opponent moved to " + squares[start + chosenSquare]);
                }
                
                else 
                {
                    //console.log ("Invalid move. Trying again");
                    
                    opponentTurn();
                }
            }
            
            // Prevent overlapping or underlapping on the second-right rank;
            if (start === 3 || start === 8 || start === 13 || start === 18 || start === 23)
            {
                if (pieceCheck === undefined && attempts < attemptLimit)
                {
                    attempts += 1;
                    
                    opponentTurn();
                }
                
                else if (chosenSquare !== 7 && chosenSquare !== 2
                    && chosenSquare !== -3 && chosenSquare !== -8
                    && squares[start + chosenSquare] !== undefined
                    && pieceCheck !== 'student0' && pieceCheck !== 'student1' 
                    && pieceCheck !== 'student2' && pieceCheck !== 'student3'
                    && pieceCheck !== 'master0')
                {
                    
                    // Check for orange piece and remove it from the game if it is landed on;
                    if (pieceCheck === 'student4' || pieceCheck === 'student5'
                        || pieceCheck === 'student6' || pieceCheck === 'student7'
                        || pieceCheck === 'master1')
                    {
                        $('#' + pieceCheck).remove();
                        
                        //console.log ('You lost a piece!');
                        $('#info').text('You have lost a piece!');
                    }
                    
                    attempts = 0;
                
                    // Moves the piece;
                    chosenPiece.animateTo('appendTo', squares[start + chosenSquare]);
                    
                    checkForWin();
                    
                    //console.log("Opponent moved to " + squares[start + chosenSquare]);
                }
                
                else 
                {
                    //console.log ("Invalid move. Trying again");
                    
                    opponentTurn();
                }
            }
        
            // Prevent overlapping or underlapping on the right rank;
            if (start === 4 || start === 9 || start === 14 || start === 19 || start === 24 )
            {
                if (pieceCheck === undefined && attempts < attemptLimit)
                {
                    attempts += 1;
                    
                    opponentTurn();
                }
                
                else if (chosenSquare !== 12 && chosenSquare !== 11
                    && chosenSquare !== 7 && chosenSquare !== 6
                    && chosenSquare !== 2 && chosenSquare !== 1
                    && chosenSquare !== -3  && chosenSquare !== -4
                    && chosenSquare !== -8  && chosenSquare !== -9
                    && squares[start + chosenSquare] !== undefined
                    && pieceCheck !== 'student0' && pieceCheck !== 'student1' 
                    && pieceCheck !== 'student2' && pieceCheck !== 'student3'
                    && pieceCheck !== 'master0')
                {
                    // Check for orange piece and remove it from the game if it is landed on;
                    if (pieceCheck === 'student4' || pieceCheck === 'student5'
                        || pieceCheck === 'student6' || pieceCheck === 'student7'
                        || pieceCheck === 'master1')
                    {
                        $('#' + pieceCheck).remove();
                        
                        //console.log ('You lost a piece!');
                        $('#info').text('You have lost a piece!');
                    }
                    
                    attempts = 0;
                    
                    // Moves the piece;
                    chosenPiece.animateTo('appendTo', squares[start + chosenSquare]);
                    
                    checkForWin();
                
                    //console.log("Opponent moved to " + squares[start + chosenSquare]);
                }
                    
                else 
                {
                    //console.log ("Invalid move. Trying again");
                    
                    opponentTurn();
                }
            }
        }
    }
    
    //The following code is by Mike Turley and was found on stack overflow.
    $.fn.animateTo = function(appendTo, destination, duration, easing, complete) 
    {
        if(appendTo !== 'appendTo'     &&
        appendTo !== 'prependTo'    &&
        appendTo !== 'insertBefore' &&
        appendTo !== 'insertAfter') 
        {
            return this;
        }
        
        var target = this.clone(true).css('visibility','hidden')[appendTo](destination);
        
        this.css({ 'position' : 'relative', 'top' : '0px', 'left' : '0px'}).animate({
            'top' : (target.offset().top - this.offset().top)+'px', 'left' : (target.offset().left - this.offset().left)+'px'
        }, duration, easing, function() 
            {
                target.replaceWith($(this));
                $(this).css({
                'position' : 'static',
                'top'      : '',
                'left'     : ''
            });
            
            if($.isFunction(complete)) 
            {
                complete.call(this);
            }
        });
    };
    
    alert("How to play!" + "\n\n" + "To move a piece, first select a card from your hand."  + "\n" +
    "Next, select an orange piece to move." + "\n\n" + "The big piece in the middle of the board is your Master."  + "\n" + 
    "The smaller pieces are your Students."  + "\n\n" + "Your pieces may land on and take enemy pieces." + "\n\n" + "The movement cards will rotate around the board." + "\n\n" + "The game is won by getting your Master to the enemy Shrine. (The blue square in the top center.)" + "\n\n" + "The game is lost by losing your own Master-" + "\n" + "OR the enemy Master reaching your shrine." + "\n\n" + "Good luck!");
    
    makeUnmovable();
    
    cardShuffle();
    
    // Starting message.
    // console.log("Choose a card from you hand.");
    $('#instructions').text('Choose a card from your hand.');
    
    // Handle piece selection
    $('.studentP2').click(selectPiece);
    
    // Handle piece selection
    $('.masterP2').click(selectPiece);
    
    // Handle piece selection
    $('.square').click(dropPiece);
    
    // Make pieces movable once a movement card is chosen;
    $('.movementCard').click(allowMove);
    
    $('#restart').click(function()
    {
        var restart;
        
        restart = confirm('Would you like to start a new game?');
        
        if(restart)
        {
            gameReset();
        }
    })
    
    $('#rules').click(function()
    {
        alert("How to play!" + "\n\n" + "To move a piece, first select a card from your hand."  + "\n" +
        "Next, select an orange piece to move." + "\n\n" + "The big piece in the middle of the board is your Master."  + "\n" + 
        "The smaller pieces are your Students."  + "\n\n" + "Your pieces may land on and take enemy pieces." + "\n\n" + "The movement cards will rotate around the board." + "\n\n" + "The game is won by getting your Master to the enemy Shrine. (The blue square in the top center.)" + "\n\n" + "The game is lost by losing your own Master-" + "\n" + "OR the enemy Master reaching your shrine." + "\n\n" + "Good luck!");
    })
    // Original 16 Cards
    moveCrab = function()
    {
        var crab = new MovementCard(currentSquare, -5, -2, 2);
        
        // console.log("Moving with Crab");
        // $('#instructions').text('Moving with Crab.');
    };
    
    moveEel = function()
    {
        var eel = new MovementCard(currentSquare, -6, 1, 4);
        
        // console.log("Moving with Eel");
        // $('#instructions').text('Moving with Eel.');
    };
    
    moveRabbit = function()
    {
        var rabbit = new MovementCard(currentSquare, -4, 2, 4);
        
        //console.log("Moving with Rabbit");
        // $('#instructions').text('Moving with Rabbit.');
    };
    
    moveCrane = function()
    {
        var crane = new MovementCard(currentSquare, -5, 4, 6);
    };
    
    moveGoose = function()
    {
        var goose = new MovementCard(currentSquare, -6, -1, 1, 6);
    };
    
    moveOx = function()
    {
        var ox = new MovementCard(currentSquare, -5, 1, 5);
    };
    
    moveMonkey = function()
    {
        var monkey = new MovementCard(currentSquare, -6, -4, 4, 6);
    };
    
    moveTiger = function()
    {
        var tiger = new MovementCard(currentSquare, -10, 5);
    };
    
    moveRooster = function()
    {
        var rooster = new MovementCard(currentSquare, -4, -1, 1, 4);
    };
    
    moveFrog = function()
    {
        var frog = new MovementCard(currentSquare, -6, -2, 6);
    };
    
    moveMantis = function()
    {
        var mantis = new MovementCard(currentSquare, -6, -4, 5);
    };
    
    moveHorse = function()
    {
        var horse = new MovementCard(currentSquare, -5, -1, 5);
    };
    
    moveElephant = function()
    {
        var elephant = new MovementCard(currentSquare, -6, -4, -1, 1);
    };
    
    moveDragon = function()
    {
        var dragon = new MovementCard(currentSquare, -7, -3, 4, 6);
        
        // console.log("Moving with Dragon");
        // $('#instructions').text('Moving with Dragon.');
    };
    
    moveCobra = function()
    {
        var cobra = new MovementCard(currentSquare, -4, -1, 6);
        
        // console.log("Moving with Cobra");
        // $('#instructions').text('Moving with Cobra.');
    };
    
    moveBoar = function()
    {
        var boar = new MovementCard(currentSquare, -5, -1, 1);
    };
    
    // New Cards from latest expansion
    moveBear = function()
    {
        var bear = new MovementCard(currentSquare, -6, -5, 6);
        
        // console.log("Moving with Crab");
        // $('#instructions').text('Moving with Bear.');
    };
    
    movePanda = function()
    {
        var panda = new MovementCard(currentSquare, -5, -4, 4);
        
        // console.log("Moving with Eel");
        // $('#instructions').text('Moving with Panda.');
    };
    
    moveOtter = function()
    {
        var otter = new MovementCard(currentSquare, -6, 2, 6);
        
        //console.log("Moving with Rabbit");
        // $('#instructions').text('Moving with Otter.');
    };
    
    moveSable = function()
    {
        var sable = new MovementCard(currentSquare, -4, -2, 4);
    };
    
    moveDog = function()
    {
        var dog = new MovementCard(currentSquare, -6, -1, 4);
    };
    
    moveFox = function()
    {
        var fox = new MovementCard(currentSquare, -4, 1, 6);
    };
    
    moveMouse = function()
    {
        var mouse = new MovementCard(currentSquare, -5, 1, 4);
    };
    
    moveRat = function()
    {
        var rat = new MovementCard(currentSquare, -5, -1, 6);
    };
    
    moveTanuki = function()
    {
        var tanuki = new MovementCard(currentSquare, -5, -3, 4);
    };
    
    moveIguana = function()
    {
        var iguana = new MovementCard(currentSquare, -7, -5, 6);
    };
    
    moveSeaSnake = function()
    {
        var seaSnake = new MovementCard(currentSquare, -5, 2, 4);
    };
    
    moveViper = function()
    {
        var viper = new MovementCard(currentSquare, -5, -2, 6);
    };
    
    moveGiraffe = function()
    {
        var giraffe = new MovementCard(currentSquare, -7, -3, 5);
    };
    
    moveKirin = function()
    {
        var kirin = new MovementCard(currentSquare, -9, -11, 10);
        
        // console.log("Moving with Dragon");
        // $('#instructions').text('Moving with Kirin.');
    };
    
    movePhoenix = function()
    {
        var phoenix = new MovementCard(currentSquare, -6, -4, -2, 2);
        
        // console.log("Moving with Cobra");
        // $('#instructions').text('Moving with Phoenix.');
    };
    
    moveTurtle= function()
    {
        var turtle = new MovementCard(currentSquare, -2, 2, 4, 6);
    };
});