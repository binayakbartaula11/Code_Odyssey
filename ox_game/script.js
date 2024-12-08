const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const restartButton = document.getElementById('restart');
const lineElement = document.getElementById('line');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

function renderBoard() {
    boardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        boardElement.appendChild(cellElement);
    });
}

function handleCellClick(index) {
    if (board[index] !== '' || !isGameActive) return;

    board[index] = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    renderBoard();
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusElement.textContent = `Player ${board[a]} wins!`;
            isGameActive = false;
            drawWinningLine(pattern);
            return;
        }
    }

    if (!board.includes('')) {
        statusElement.textContent = 'It\'s a draw!';
        isGameActive = false;
    }
}

function drawWinningLine(pattern) {
    const [start, , end] = pattern;
    const startCell = document.querySelectorAll('.cell')[start];
    const endCell = document.querySelectorAll('.cell')[end];

    const startRect = startCell.getBoundingClientRect();
    const endRect = endCell.getBoundingClientRect();

    const x1 = startRect.left + startRect.width / 2;
    const y1 = startRect.top + startRect.height / 2;
    const x2 = endRect.left + endRect.width / 2;
    const y2 = endRect.top + endRect.height / 2;

    const length = Math.hypot(x2 - x1, y2 - y1);
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

    lineElement.style.width = `${length}px`;
    lineElement.style.transform = `rotate(${angle}deg)`;
    lineElement.style.left = `${x1}px`;
    lineElement.style.top = `${y1}px`;
    lineElement.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    statusElement.textContent = '';
    lineElement.style.display = 'none'; // Hide line on restart
    renderBoard();
});

renderBoard();
