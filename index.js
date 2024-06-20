console.log(document.getElementById("json"));
console.log('funguju?');

function jedem() {
console.log(navigator);
}

navigator.getBattery().then((battery) => {
    batteryIsCharging = battery.charging;
    console.log(battery);
})
