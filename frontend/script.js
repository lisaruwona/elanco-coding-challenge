fetch('/data')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const labels = data.countries.map(country => country.name);
        const populations = data.countries.map(country => country.population);

        const ctx = document.getElementById('populationChart').getContext('2d');
        new Chart (ctx, {
            type: 'bar',
            data : {
                labels: labels,
                datasets: [{
                    label: 'Population',
                    data: populations,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    });