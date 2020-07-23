let findTheOldest = function(people) {
    people.sort((a, b) => getAge(b) - getAge(a));

    return people[0];
}

function getAge(person) {
    if (person.yearOfDeath) return person.yearOfDeath - person.yearOfBirth;

    return new Date().getFullYear() - person.yearOfBirth;
}

module.exports = findTheOldest
