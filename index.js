//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.





/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');

let startFuel = input.question("What is the starting fuel level?\n");
startFuel = Number(startFuel);


while (startFuel > 30001 || startFuel < 5000){
    startFuel = input.question("Invalid Answer. What is starting fuel level?\n");
    startFuel = Number(startFuel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

let numAstro = input.question("How many astronauts? Max:7 \n");
numAstro = Number(numAstro);

while (numAstro > 7 || numAstro < 1){
    numAstro = input.question("Invalid Number! How many astronauts? Max:7\n");
    numAstro = Numbers(numAstro);
}


//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let altitude = 0;
altitude = Number(altitude);

for (i = startFuel; i>0; i = i - (100*numAstro)){
    altitude = altitude + 50;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitude} km.`)

if (altitude > 2000){
    console.log('Orbit achieved!');
} else {
    console.log("Failed to reach orbit.")
}