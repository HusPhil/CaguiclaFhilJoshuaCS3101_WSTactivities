document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    
    
    const text = "Hello there! ";
    let index = 0;

    const typingSpeed = 100;
    const waveDelay = 500;

    function typeText() {
        if (index < text.length) {
            greetingElement.innerHTML = text.substring(0, index + 1) + `<i id="hand-wave" class="fa-solid fa-hands-clapping" ></i>`;
            const waveIcon = document.getElementById("hand-wave");
            waveIcon.style.visibility = "hidden";  
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            const waveIcon = document.getElementById("hand-wave");
            waveIcon.style.visibility = "";  
            waveIcon.style.animation = "wave 1s infinite";
            setTimeout(() => {
            }, waveDelay);
        }
    }

    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes wave {
            0% { transform: rotate(0deg); }
            20% { transform: rotate(10deg); }
            40% { transform: rotate(-10deg); }
            60% { transform: rotate(10deg); }
            80% { transform: rotate(-10deg); }
            100% { transform: rotate(0deg); }
        }
    `;
    document.head.appendChild(style);

    typeText();
});
