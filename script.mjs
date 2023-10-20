
document.getElementById('convertButton').addEventListener('click', () => {
    const marlaInput = parseFloat(document.getElementById('marlaInput').value);
    if (!isNaN(marlaInput)) {
        const squareFeet = marlaInput * 272.25; // Assuming 1 marla is approximately 225 square feet
        document.getElementById('result').textContent = `${marlaInput} marlas is equal to ${squareFeet} square feet.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid number of marlas.';
    }
});
