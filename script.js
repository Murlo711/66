const historyStack = [];
let historyIndex = -1;

function navigate(url) {
    if (historyIndex < historyStack.length - 1) {
        historyStack.splice(historyIndex + 1);
    }
    historyStack.push(url);
    historyIndex++;
}

document.getElementById('backBtn').addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        console.log('Переход назад:', historyStack[historyIndex]);
    }
});

document.getElementById('forwardBtn').addEventListener('click', () => {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        console.log('Переход вперед:', historyStack[historyIndex]);
    }
});

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, 100, 50, 50);
    x += 2;
    if (x > canvas.width) x = 0;

    requestAnimationFrame(animate);
}

animate(); 

const worker = new Worker('worker.js');
worker.onmessage = function(e) {
    document.getElementById('result').innerText = 'Результат вычислений: ' + e.data;
};

document.getElementById('startWorkerBtn').addEventListener('click', () => {
    worker.postMessage(1000000000);
});