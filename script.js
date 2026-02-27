document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    const confirmationMessage = `Booking Confirmed! \nDestination: ${destination} \nDate: ${date} \nSeats: ${seats}`;
    
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.textContent = confirmationMessage;
    confirmationDiv.classList.remove('hidden');
});