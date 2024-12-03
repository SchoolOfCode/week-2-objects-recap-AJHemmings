const myCat = {
    color: "black",
    name: "Tony",
    lobesCuddles: true,
};

const myHouse = {
    height: "2 stories",
    parking: false,
    bedrooms: 2,
    garden: true,
    energyEfficiencyRaating: "D",
};

const myCar = {
    color: "Red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    mpg: 20,
};

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseDate: 2008,
    leadActor: "Christian Bale",
};

let person = {
    name: "Ben",
    likesChocolate: true,
};

console.log(person.likesChocolate);

// `${person.name}` (person.ikesChocolate)

if (person.likesChocolate) {
    console.log(`${person.name} loves chocolate`)
} else {
    console.log(`${person.name} hates chocolate`)
};

let desiredPleasantry = "farewell";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

// we access the object phrases first inside of () then we access the seclected phrase with [] 
// and quotes due to it being a string

console.log(bensPhrases["smallTalk"])

// we access the object phrases first inside () then we access the second object with [] 
// there is no need to quote as the second object has a string assigned to it

console.log(bensPhrases[desiredPleasantry])

let me = {
    firstName: "firstName",
    lastName: "lastName",
    isBootcamper: false,
  };

// dot notation grabs the object "me" and the property "isBootcamper" and changes it "=true"
// console.log(me) will now show the updated properties

  me.isBootcamper = true;



