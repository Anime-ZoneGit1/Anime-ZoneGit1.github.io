// Update Real-Time Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").innerText = `Waktu: ${hours}:${minutes}:${seconds}`;
}

// Get Battery Level
function updateBatteryStatus() {
    navigator.getBattery().then(function(battery) {
        const batteryPercentage = Math.round(battery.level * 100);
        document.getElementById("battery").innerText = `Baterai: ${batteryPercentage}%`;
    });
}

// Call the functions every second
setInterval(updateClock, 1000);
setInterval(updateBatteryStatus, 1000);

// Initial calls
updateClock();
updateBatteryStatus();

// Animasi Loading selesai setelah 3 detik
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000);
};