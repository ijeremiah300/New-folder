document.addEventListener('DOMContentLoaded', function() {
    // Function to display current UTC time
    function displayCurrentTimeUTC() {
        const now = new Date();
        const options = { timeZone: 'UTC', hour12: false, weekday: 'long' };
        const timeString = now.toLocaleTimeString('en-US', options);
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = timeString;
        document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
    }

    // Call the function once on page load
    displayCurrentTimeUTC();
});
