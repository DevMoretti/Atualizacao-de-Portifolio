const text = "Nicolas Brayan";
        const typedText = document.getElementById('typedText');
        function typeWriter() {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    typedText.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 100); 
        }
        window.onload = function() {
            typeWriter();
        };