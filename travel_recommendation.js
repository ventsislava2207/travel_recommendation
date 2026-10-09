const url = 'travel_recommendation_api.json';

const btnSearch = document.getElementById("searchBtn");
const btnClear = document.getElementById("clearBtn");


function fetchData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Health Analysis Data:");
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

