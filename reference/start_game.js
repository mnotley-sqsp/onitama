// Logic for the gameplay of Onitama

class startGame {
    constructor () {}
       
        noMoves() {

            $('#board').css('pointer-events', 'none');
            $('#handP1').css('pointer-events', 'none');
            $('#handP2').css('pointer-events', 'none');

        }

        newBoard() {
            $('.square').children('div').remove();
            $('.movementCard').remove();
        }

        initPieces() {
            //IDs & Classes that we want to add to the starting squares to set the pieces for both the player and computer
            const startingSquares = [
                {div_id: 'student0', div_class: 'studentP1'},
                {div_id: 'student1', div_class:'studentP1'},
                {div_id: 'master0', div_class: 'masterP1'},
                {div_id: 'student2', div_class: 'studentP1'},
                {div_id: 'student3', div_class: 'studentP1'},
                {div_id: 'student4', div_class: 'studentP2'},
                {div_id: 'student5', div_class: 'studentP2'},
                {div_id: 'master1', div_class: 'masterP2'},
                {div_id: 'student6', div_class: 'studentP2'},
                {div_id: 'student7', div_class: 'studentP2'}
            ]

            const playerSquares = ['square0', 'square1', 'square2', 'square3', 'square4']
            const oppSquares = ['square20', 'square21', 'square22', 'square23', 'square24']

            //Walk through startingSquares and append the key(ID) and value(class) to the new children div we're creating for the starting pieces
            for (let i = 0; i < startingSquares.length; i++){
                //Create the div to append to the squares of the grid where the starting pieces will go
                const newElem = document.createElement('div')
                if (i < 5) {
                    let pieceSquare = document.getElementById(playerSquares[i]);
                    //Set new div with class and id from startingSquares array
                    newElem.setAttribute('class', startingSquares[i].div_class);
                    newElem.setAttribute('id', startingSquares[i].div_id);
                    
                    pieceSquare.appendChild(newElem);
                }
                else {
                    let x = i - 5;
                    let pieceSquare = document.getElementById(oppSquares[x]);
                    //Set new div with class and id from startingSquares array
                    newElem.setAttribute('class', startingSquares[i].div_class);
                    newElem.setAttribute('id', startingSquares[i].div_id);
                    //Handle Else case
                    pieceSquare.appendChild(newElem);
                }
                
            }
            

        }
       
}
