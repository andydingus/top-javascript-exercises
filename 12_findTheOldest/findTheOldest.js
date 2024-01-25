const findTheOldest = function (array) {
    // Get yearOfDeath and yearOfBirth from each object and get age from them (yOD - yOB)
    // Compare the age and return the name of the one with the oldest age/highest number
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}


// Do not edit below this line
module.exports = findTheOldest;
