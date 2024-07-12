const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const key = 'zyxwvutsrqponmlkjihgfedcba'; // Example key

        function encrypt() {
            const inputText = document.getElementById('inputText').value.toLowerCase();
            let outputText = '';

            for (let char of inputText) {
                if (alphabet.includes(char)) {
                    const index = alphabet.indexOf(char);
                    outputText += key[index];
                } else {
                    outputText += char; // Non-alphabet characters are added as is
                }
            }

            document.getElementById('outputText').value = outputText;
        }

        function decrypt() {
            const inputText = document.getElementById('inputText').value.toLowerCase();
            let outputText = '';

            for (let char of inputText) {
                if (key.includes(char)) {
                    const index = key.indexOf(char);
                    outputText += alphabet[index];
                } else {
                    outputText += char; // Non-alphabet characters are added as is
                }
            }

            document.getElementById('outputText').value = outputText;
        }