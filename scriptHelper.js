// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    function myFetch() {
        // let target = data[random];
        let target = myFetch(pickPlanet);
   // Here is the HTML formatting for our mission target div.
        target.innerHTML = 
        `<h2>Mission Destination</h2>
            <ol>
                <li>Name: ${target.name} </li>
                <li>Diameter: ${target.diameter} </li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${target.distance}</li>
                <li>Number of Moons: ${target.moons}</li>
            </ol>
            <img src="${target.image}">`
}

function validateInput(testInput) {
    if (formField === "") {
        return "Empty"
    }
    if (isNaN(testInput) === true) {
        return "Not a Number"
    }
    if (isNaN(testInput) === false) {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (pilot.value === validateInput || copilot.value === validateInput || fuelLevel.value === validateInput || cargoLevel === validateInput) {
        window.alert("All fields are required");
    }
    document.getElementByClassName("pilotName") = "Chris";
    document.getElementByClassName("copilotName") = "Blake";


    if (fuelLevel < 10000) {
        document.getElementById(faultyItems) = visible;
        fuelStatus.innerHTML = "There is not enough fuel for the journey.";
        document.getElementById(launchStatus) = "Shuttle not ready for launch"
        launchStatus.style.color = red;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
}

function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then(function(data) {
                // console.log(json[0]);
            }
    });
    });
    // console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    let random = planetsReturned(Math.random() * data.length);
    // window.console.log(random);
    return random;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
