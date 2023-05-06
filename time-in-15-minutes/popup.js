function getTimeIn15Minutes() {
    const now = new Date();
    const timeIn15Minutes = new Date(now.getTime() + 15 * 60 * 1000);
    return timeIn15Minutes.toLocaleTimeString();
}

document.getElementById('time-display').innerText = getTimeIn15Minutes();
