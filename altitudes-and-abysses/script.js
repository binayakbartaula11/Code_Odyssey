// JavaScript for smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// JavaScript for Pressure Calculator and Converter
const calculatePressureButton = document.getElementById('calculate-pressure');
const pressureResult = document.getElementById('pressure-result');

calculatePressureButton.addEventListener('click', () => {
    const depth = parseFloat(document.getElementById('depth').value);
    const atmosphericPressure = 101325; // Pa

    if (depth >= 0) {
        const waterDensity = 1000; // kg/m³ (approximate density of water)
        const gravity = 9.81; // m/s²

        // Calculate pressure in Pascals
        const pressure = atmosphericPressure + (waterDensity * gravity * depth);
        pressureResult.textContent = `Pressure at ${depth} m depth: ${pressure.toFixed(2)} Pa (${(pressure / 1000).toFixed(2)} kPa)`;
    } else {
        pressureResult.textContent = 'Please enter a valid depth.';
    }
});

// Pressure conversion logic
const convertPressureButton = document.getElementById('convert-pressure');
const conversionResult = document.getElementById('conversion-result');

convertPressureButton.addEventListener('click', () => {
    const value = parseFloat(document.getElementById('pressure-value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    if (isNaN(value)) {
        conversionResult.textContent = 'Please enter a valid pressure value.';
        return;
    }

    let pressureInPa;

    // Convert from selected unit to Pascals
    switch (fromUnit) {
        case 'Pa':
            pressureInPa = value;
            break;
        case 'kPa':
            pressureInPa = value * 1000;
            break;
        case 'atm':
            pressureInPa = value * 101325;
            break;
        case 'psi':
            pressureInPa = value * 6894.76;
            break;
    }

    let convertedValue;

    // Convert from Pascals to selected unit
    switch (toUnit) {
        case 'Pa':
            convertedValue = pressureInPa;
            break;
        case 'kPa':
            convertedValue = pressureInPa / 1000;
            break;
        case 'atm':
            convertedValue = pressureInPa / 101325;
            break;
        case 'psi':
            convertedValue = pressureInPa / 6894.76;
            break;
    }

    conversionResult.textContent = `${value} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
});
