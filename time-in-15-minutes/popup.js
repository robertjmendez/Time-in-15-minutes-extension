document.getElementById('display-button').addEventListener('click', displayFutureTime);

function displayFutureTime() {
    const selectedMinutes = parseInt(document.getElementById('time-selection').value);
    const now = new Date();
    const futureTime = new Date(now.getTime() + selectedMinutes * 60 * 1000);
    document.getElementById('time-display').innerText = "Time in " + selectedMinutes + " minutes: " + futureTime.toLocaleTimeString();
}


