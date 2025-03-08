document.addEventListener("DOMContentLoaded", () => {
    // Collapsible functionality
    const collapsibles = document.querySelectorAll(".v-collapsible");

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", () => {
            const content = collapsible.nextElementSibling;
            collapsible.classList.toggle("is-active");

            if (content.style.maxHeight) {
                // Close the collapsible
                content.style.maxHeight = null;
            } else {
                // Open the collapsible
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Chart initialization
    const plot1 = document.getElementById('plot1').getContext('2d');
    new Chart(plot1, {
        type: 'line',
        data: {
            labels: Array.from({ length: 601 }, (_, i) => i), // Temperature range from 0 to 600 K
            datasets: [
                {
                    data: Array.from({ length: 601 }, (_, T) => 0.007 * T), // Line with slope 0.007
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false,
                    borderWidth: 2,
                    label: 'drift 1', // Add a label for the dataset
                },
                {
                    data: Array.from({ length: 601 }, (_, T) => 0.02 * T), // Line with slope 0.02
                    borderColor: 'black',
                    borderWidth: 1,
                    fill: false,
                    label: 'drift 2', // Add a label for the dataset
                }
            ]
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    min: 0, // Minimum y-value
                    max: 12, // Adjusted maximum y-value to fit both lines
                    title: {
                        display: true,
                        text: 'Vd'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Electric Field'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true, // Show legend for the datasets
                }
            }
        }
    });

    // Function to validate the inputs
    function validateInputs() {
        const input1 = document.getElementById('plot-input1').value.trim().toLowerCase();
        const input2 = document.getElementById('plot-input2').value.trim().toLowerCase();
        
        const resultMessage = document.getElementById('result-message');
        let isCorrect = false;

        // Check if the inputs match the desired values
        if (input1 === 'b' && input2 === 'a') {
            isCorrect = true;
        }

        // Display result message
        if (isCorrect) {
            resultMessage.style.display = 'block';
            resultMessage.textContent = 'Correct!';
            resultMessage.style.color = 'black';
        } else {
            resultMessage.style.display = 'block';
            resultMessage.textContent = 'Incorrect. If the mobility (μ) of charge carriers is high, the diffusion coefficient will also be high, according to the Einstein relation. This means carriers will diffuse more quickly through the material. And lower mobility means the rate of diffusion will be lower.';
            resultMessage.style.color = 'black';
        }
    }

    // Add event listener to the submit button
    document.getElementById('submit-btn').addEventListener('click', validateInputs);
});