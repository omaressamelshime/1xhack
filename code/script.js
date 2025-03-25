import { codes } from './config.js';

const generateBtn = document.getElementById('generateBtn');
const codeDisplay = document.getElementById('codeDisplay');

function getRandomCode() {
    const randomIndex = Math.floor(Math.random() * codes.length);
    return codes[randomIndex];
}

function animateCode() {
    codeDisplay.style.transform = 'scale(0.95)';
    codeDisplay.style.opacity = '0.5';
    
    setTimeout(() => {
        const newCode = getRandomCode();
        codeDisplay.textContent = newCode;
        codeDisplay.style.transform = 'scale(1)';
        codeDisplay.style.opacity = '1';
    }, 150);
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        codeDisplay.classList.add('copied');
        setTimeout(() => {
            codeDisplay.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

codeDisplay.addEventListener('click', () => {
    if (codeDisplay.textContent !== 'اضغط على الزر للحصول على كود') {
        copyToClipboard(codeDisplay.textContent);
    }
});

generateBtn.addEventListener('click', animateCode);