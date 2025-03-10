async function fetchCountryInfo() {
    try{
        const countryName = document.getElementById("nameOfCountry").value;
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

        if (!response.ok){
            throw new Error("Could not find the country you are looking for")
        }

        const data = await response.json();

        const countryCapital = data.capital;
        const countryPopulation = data.population;
        const countryRegion = data.region;
        const countryFlag = data.flag;
        const countryBorder = data.borders;

        const countryInfo = document.getElementById("country-info")


        console.log(data);

    } catch(error) {
        console.log(error);
    }

}



//This is used to check if the API is working by displaying dummy data

// fetch(`https://restcountries.com/v3.1/name/South AFrica`)
// .then((response) =>response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

