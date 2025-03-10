async function fetchCountryInfo() {
    try{
        const countryName = document.getElementById("nameOfCountry").value;

        document.getElementById("country-info").innerHTML = "";
        document.getElementById("bordering-countries").innerHTML = "";
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);



        if (!response.ok || countryName === ""){
            throw new Error("Could not find the country you are looking for")
        }

        const data = await response.json();

        const countryCapital = data[0].capital[0];
        const countryPopulation = data[0].population;
        const countryRegion = data[0].region;
        const countryFlag = data[0].flags.png;
        const countryBorder = data[0].borders;

        //This is in relation to the first section
        const countryInfo = document.getElementById("country-info");

        const info = document.createElement("p");
        info.textContent = `Here is information of ${countryName} :`
        countryInfo.appendChild(info)

        const capitalText = document.createElement("p");
        capitalText.textContent = `Capital: ${countryCapital}`
        countryInfo.appendChild(capitalText);

        const PopulationText = document.createElement("p");
        PopulationText.textContent = `Population: ${countryPopulation}`
        countryInfo.appendChild(PopulationText);

        const RegionText = document.createElement("p");
        RegionText.textContent = `Region: ${countryRegion}`
        countryInfo.appendChild(RegionText);

        
        const infoOfFlag = document.createElement("p");
        infoOfFlag.textContent = `Flag:`
        countryInfo.appendChild(infoOfFlag);

        const imageOfFlag = document.createElement("img")
        imageOfFlag.src = countryFlag;
        countryInfo.appendChild(imageOfFlag);

        //This is in relation to the second section
        const neighbouringCount = document.getElementById("bordering-countries");

        const infoOfNeighbours = document.createElement("p");
        infoOfNeighbours.textContent = `Neighbouring countries and their flags: `
        neighbouringCount.appendChild(infoOfNeighbours);

        const noOffNeighbouring = countryBorder.length;

        for (let i=0; i < noOffNeighbouring; i++) {
            const nameOfBorder = document.createElement("p");

            const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryBorder[i]}`); 
            const countryData = await response.json();

            nameOfBorder.textContent = countryData[0].name.common;
            const neighbourFlag = countryData[0].flags.png;

            const img2 = document.createElement("img")
            img2.src = neighbourFlag;

            neighbouringCount.appendChild(nameOfBorder);
            neighbouringCount.appendChild(img2)
        }
        
        console.log(data);

    } catch(error) {
        console.log(error);

        const countryInfo = document.getElementById("country-info");

        const errorMsg = document.createElement("p");
        errorMsg.textContent = `Could not find the country you are looking for`
        countryInfo.appendChild(errorMsg);


    }

}



//This is used to check if the API is working by displaying dummy data

// fetch(`https://restcountries.com/v3.1/name/South AFrica`)
// .then((response) =>response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

