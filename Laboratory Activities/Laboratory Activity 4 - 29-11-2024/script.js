const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCountDisplay');
const sentenceCountDisplay = document.getElementById('sentenceCountDisplay');
const emojiImg = document.getElementById('emoji');

const thinkingEmojiSrc = "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f914.gif";
const smileEmojiSrc = "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f600.gif";

let typingTimer; // Timer identifier
const doneTypingInterval = 1000 * 0.5; // Time in milliseconds to wait before considering typing done

// Function to update counts
function updateCounts() {
    const text = textInput.value.trim();

    // Compute the word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    wordCountDisplay.textContent = `${wordCount === 1 ? 'Word' : 'Words'}: ${wordCount}`;

    // Compute the sentence count
    const sentences = text.split(/(?<=[.!?])\s+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;
    sentenceCountDisplay.textContent = `${sentenceCount === 1 ? 'Sentence' : 'Sentences'}: ${sentenceCount}`;
}

// Add an input event listener to the textInput element
textInput.addEventListener('input', () => {
    clearTimeout(typingTimer); // Clear the timer on each input

    if (emojiImg.src !== thinkingEmojiSrc) {
        emojiImg.src = thinkingEmojiSrc;
    }

    // Temporarily display loading text
    wordCountDisplay.textContent = `...`;
    sentenceCountDisplay.textContent = `...`;

    // Set a new timer
    typingTimer = setTimeout(() => {
        console.log('User is done typing:', textInput.value);
        emojiImg.src = smileEmojiSrc;
        updateCounts(); // Update counts immediately
    }, doneTypingInterval);
});