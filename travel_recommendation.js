const url = 'travel_recommendation_api.json';

const btnSearch = document.getElementById("searchBtn");
const btnClear = document.getElementById("clearBtn");

function searchRecommendation() {
    const input = document.getElementById("searchInput").value.toLowerCase();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (input.includes("beach")) {
                console.log(data.beaches)
            } else if (input.includes("temple")) {
                console.log(data.temples)
            } else if (input.includes("country") || input.includes("countries")) {
                console.log(data.countries)
            } else {
                console.log("No results found");
            }

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

btnSearch.addEventListener("click", searchRecommendation);
