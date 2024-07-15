document.getElementById('forecast-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    // Mock forecast data - replace with actual API call
    const forecastData = {
        date: date,
        category: category,
        forecast: Math.floor(Math.random() * 100) + 1, // Random forecast value
        hour: 12,
        temperature: 34,
        humidity: 55,
        visibility: 100,
        sku: 10017413,
        windSpeed: 67,
        rainfall: 0.7,
        snowfall: 0.2
    };

    displayResults(forecastData);
    renderChart(forecastData);
});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Category:</strong> ${data.category}</p>
        <p><strong>Forecast:</strong> ${data.forecast} units</p>
        <p><strong>Hour:</strong> ${data.hour}</p>
        <p><strong>Temperature:</strong> ${data.temperature} °C</p>
        <p><strong>Humidity:</strong> ${data.humidity} %</p>
        <p><strong>Visibility:</strong> ${data.visibility} m</p>
        <p><strong>SKU:</strong> ${data.sku}</p>
        <p><strong>Wind Speed:</strong> ${data.windSpeed} km/h</p>
        <p><strong>Rainfall:</strong> ${data.rainfall} mm</p>
        <p><strong>Snowfall:</strong> ${data.snowfall} cm</p>
    `;
}

function renderChart(data) {
    const ctx = document.getElementById('forecast-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [data.date],
            datasets: [{
                label: `${data.category} Forecast`,
                data: [data.forecast],
                backgroundColor: '#ff3e6c',
                borderColor: '#e7355d',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}




