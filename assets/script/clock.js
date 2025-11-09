function initClockWidget() {
    const tzSelect = document.getElementById("tzSelect");
    const clockDisplay = document.getElementById("clock");
    if (!tzSelect || !clockDisplay) return;

    if (tzSelect.options.length === 0) {
        const timezones = moment.tz.names();
        timezones.forEach(tz => {
            const option = document.createElement("option");
            option.value = tz;
            option.textContent = tz;
            if (tz === moment.tz.guess()) option.selected = true;
            tzSelect.appendChild(option);
        });
    }

    function updateClock() {
        const tz = tzSelect.value || moment.tz.guess();
        const now = moment().tz(tz).format("dddd, DD/MM/YYYY HH:mm:ss");
        clockDisplay.textContent = now;
    }

    updateClock();
    setInterval(updateClock, 1000);

    tzSelect.addEventListener("change", updateClock);
}

document.addEventListener("fragments-ready", initClockWidget);
document.addEventListener("DOMContentLoaded", initClockWidget);