const url = 'travel_recommendation_api.json';

const btnSearch = document.getElementById("searchBtn");
const btnClear = document.getElementById("clearBtn");

function searchRecommendation() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("resultDiv");
    const heroContent = document.querySelector(".hero-content");
    resultDiv.innerHTML = "";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            heroContent.style.display = "none";
            resultDiv.style.display = "grid";
            resultDiv.innerHTML += `<h2>Search Results:</h2>`;

            if (input.includes("beach")) {

                for (const beach of data.beaches) {
                    resultDiv.innerHTML += `
                        <div class="result-card">
                            <img src="${beach.imageUrl}" alt="${beach.name}">
                            <div class="result-card-content">
                                <h3>${beach.name}</h3>
                                <p>${beach.description}</p>
                            </div>
                        </div>
                    `;
                }

            } else if (input.includes("temple")) {
                for (const temple of data.temples) {
                    resultDiv.innerHTML += `
                        <div class="result-card">
                            <img src="${temple.imageUrl}" alt="${temple.name}">
                            <div class="result-card-content">
                                <h3>${temple.name}</h3>
                                <p>${temple.description}</p>
                            </div>
                        </div>
                    `;
                }

            } else if ( ["country", "countries"].includes(input) || (input !== "" && data.countries.some(country => country.name.toLowerCase().includes(input)))) {
                const results = data.countries.filter(country => ["country", "countries"]
                        .includes(input) || country.name.toLowerCase().includes(input))
                    .flatMap(country => country.cities);

                results.forEach(city => {
                   resultDiv.innerHTML += `
                        <div class="result-card">
                            <img src="${city.imageUrl}" alt="${city.name}">
                            <div class="result-card-content">
                                <h3>${city.name}</h3>
                                <p>${city.description}</p>
                            </div>
                        </div>
                    `;
                });

            } else {
                resultDiv.innerHTML = "<h2>No results found</h2>";
            }

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

btnSearch.addEventListener("click", searchRecommendation);