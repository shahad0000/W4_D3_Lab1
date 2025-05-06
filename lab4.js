// ============ Lab 4 ===============
let saudiaAirlines  = {
    airlineName: "Saudia Airlines",
    country: "Saudi Arabia",
    fleetSize: 50,
    destinations: ["Riyadh", "Jeddah", "Dubai", "New York"],
    inOperation: true,
    bookFlight(destination) {
        return this.destinations.find(dest => dest === destination) ? `Flight to ${destination} has been booked.` : `Sorry, there are no flights to ${destination} currently.`
    },
    addDestination(newDestination) {
       if (!this.destinations[newDestination]) this.destinations.push(newDestination);
       return `${newDestination} has been added to destinations`
    },
    getSummary() {
        return "Saudia Airlines operates in Saudi Arabia, owns 120 aircraft, and flies to 20 destinations"
    }
}

console.log(saudiaAirlines.bookFlight("Riyadh"));
console.log(saudiaAirlines.bookFlight("Tokyo"));
console.log(saudiaAirlines.addDestination("London"));
console.log(saudiaAirlines.getSummary());



