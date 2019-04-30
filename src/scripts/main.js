const doctorFactory = (name, specialty, address) => {
    return {
      name: name,
      specialty: specialty,
      address: address
    };
};

let newDoctor = doctorFactory("Corey", "Hugs", "1111 Doctor Lane");

console.log(newDoctor);

const petFactory = (name, breed) => {
    return {
        name: name,
        breed: breed
    };
};
const newPetArray = [];

let newPet = petFactory("Cerin", "mixed-street-dog");
newPetArray.push(newPet);
newPet = petFactory("Cavy", "jail-bird-dog");
newPetArray.push(newPet);
newPet = petFactory("Corey", "mut");
newPetArray.push(newPet);

console.log(newPetArray)

