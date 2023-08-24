let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function makeMove(cell) {
    if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            alert(`${cells[a].textContent} wins!`);
            resetBoard();
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent !== "")) {
        alert("It's a draw!");
        resetBoard();
    }
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
}