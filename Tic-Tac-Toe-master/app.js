const xClass = 'X';
const circleClass = 'O';
let circTurn

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let eddy = 0

let row = document.querySelectorAll('[cell]');
row.forEach(function(cell) {
    cell.addEventListener('click', rowClicked, {once: true});
});


function rowClicked(e) {
    if (eddy % 2 == 0) {
       e.target.textContent = xClass;
    } else { 
        e.target.textContent= circleClass;
        } 
    eddy++;
    const cell= e.target;
    const currentClass = circTurn ? circleClass : xClass;
    placeMark (cell, currentClass)
    swapTurns()
        if(checkWin(e.target.textContent)) {
            console.log('winner!');
            // gameOver(false);
        }
};

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns(){
    circTurn = !circTurn;
}

function checkWin(textContent) {
    return winCombos.some(combination =>{
        return combination.every(index => {
            return row[index].classList.contains(textContent)
        })
    })
}

// function gameOver(draw){
//     if (draw) {

//     }else {
//         alert(textContent + ' is the Winner!!');
//     }
// }