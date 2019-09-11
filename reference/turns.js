// Turns will outline the progression of player 1's turn phase.

class startTurn {
    constructor() {

        // An array of the orange (P2/human) pieces. To access a piece with Jquery, use $(orangePieces[x]);
    const orangePieces = ['#student4', '#student5', '#student6', '#student7', '#master1'];
    
    
    // An array of the orange (P1/A1) pieces. To access a piece with Jquery, use $(bluePieces[x]);
    const bluePieces = ['#student0', '#student1', '#student2', '#student3', '#master0'];
    
    // An array of the squares that make up the board; 
    // The top left square is '#square0' and the bottom right square is '#square24';
    const squares = ['#square0', '#square1', '#square2', '#square3', '#square4'
        , '#square5', '#square6', '#square7', '#square8', '#square9'
        , '#square10', '#square11', '#square12', '#square13', '#square14'
        , '#square15', '#square16', '#square17', '#square18', '#square19'
        , '#square20', '#square21', '#square22', '#square23', '#square24'];

        let pieceOrigin;
        let nextMove;
        let pieceChosen;
        let cardChosen;
        let selectedPiece;
        let isSelected;
        let yourTurn;
        let attempts = 0;
        let attemptLimit = 300;
        
        //Nothing should be highlighted or selected
        isSelected = false;

        // It's the player's turn.
        yourTurn = true;

        attempts = 0;
        
        attemptLimit = 100;

        //Player can now interact with the board.
        $('#board').css('pointer-events', '');
        // Player can now click on their hand of cards.
        //$('#handP2').css('pointer-events', '');

        //Helper Functions
        initialSquare = function()
        {
        // Get the id attribute of the piece's square;
        currentSquare = $(this).parent('div').attr('id');
        
        // Finds currentSquare in squares[] and assigns it to currentSquare;
        currentSquare = squares.indexOf("#" + currentSquare);
        
        return currentSquare;
        };

        

        //ACTUAL START OF THE TURN//
        playerAlert = function() {
            
            $('#info').text('It is your turn.');
            $('#instructions').text("Choose a card to move your pieces.");
            
        }

        

        // If player pawn is chosen this will handle that input.
        $('.studentP2').click(pieceChosen);

        //If player king is chosen this will handle that input.
        $('.masterP2').click(pieceChosen);

        //Will handle where the piece will end up on the board once selected.
        $('.square').click(dropPiece)

        // Make pieces movable once a movement card is chosen;
        $('.movementCard').click(allowMove);




    }
}