document.getElementById('calorie-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Get user input
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activityLevel = document.getElementById('activity-level').value;

    // Validate input
    if (!age || !weight || !height) {
        alert("Please fill out all fields");
        return;
    }

    // Calculate BMR (Basal Metabolic Rate)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate daily calorie needs based on activity level
    const dailyCalories = bmr * activityLevel;

    // Display result with styled breakdown and animation
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div>
            <h3>Your Daily Caloric Needs</h3>
            <p><strong>${dailyCalories.toFixed(2)}</strong> calories/day</p>
        </div>
        <div class="breakdown">
            <p><strong>Breakdown:</strong></p>
            <p>To maintain weight: <strong>${dailyCalories.toFixed(2)}</strong> calories</p>
            <p>To lose weight: <strong>${(dailyCalories - 500).toFixed(2)}</strong> calories</p>
            <p>To gain weight: <strong>${(dailyCalories + 500).toFixed(2)}</strong> calories</p>
        </div>
    `;

    // Add subtle fade-in animation to the result
    resultDiv.style.transition = "all 0.5s ease-in-out";
    resultDiv.style.opacity = 1;
});
