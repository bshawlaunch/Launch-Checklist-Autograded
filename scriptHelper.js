// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
}
 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }   
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");


    pilotStatus.textContent = `Pilot ${pilot} is ready for launch.`;
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch.`;

    if (fuelLevel < 10000) {
        fuelStatus.textContent = "Fuel level too low for launch.";
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        list.style.visibility = "visible";
    } else {
        fuelStatus.textContent = "Fuel level high enough for launch.";
    }

    if (cargoLevel > 10000) {
        cargoStatus.textContent = "Cargo mass too heavy for launch.";
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        list.style.visibility = "visible";
    } else {
        cargoStatus.textContent = "Cargo mass low enough for launch.";
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.textContent = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        list.style.visibility = "visible";
    }
}
 
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });

    return planetsReturned;
}
 
function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

