window.addEventListener("load", function() {
    const form = document.getElementById("launchForm");
    const faultyItems = document.getElementById("faultyItems");
    const pilotName = document.getElementById("pilotName");
    const copilotName = document.getElementsByName("copilotName")[0];
    const fuelLevel = document.getElementsByName("fuelLevel")[0];
    const cargoMass = document.getElementsByName("cargoMass")[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        let errorMessage = "";
        let readyCheck = [];

    const fields = [pilotName, copilotName, fuelLevel, cargoMass];
    const validations = ["Not a Number", "Not a Number", "Is a Number", "Is a Number"];
    const messages = [
        "Pilot name field requires text input.\n",
        "Co-Pilot name field requires text input.\n",
        "Fuel level field requires a number input.\n",
        "Cargo mass field requires a number input.\n"
    ];

    for (let i = 0; i < fields.length; i++) {
        const input = fields[i].value;
        const validation = validateInput(input);
        
        if (validation === "Empty" || validation !== validations[i]) {
            errorMessage += messages[i];
            readyCheck.push(false);
        } else {
            readyCheck.push(true);
        }
}

        formSubmission(document, faultyItems, pilotName.value, copilotName.value, Number(fuelLevel.value), Number(cargoMass.value));
    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); 
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
            console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    });
});
