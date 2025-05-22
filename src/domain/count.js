const count = (data) => {
    return data.map(country => {
        const people = country.people.map(person => {
            const animalCount = person.animals.length;
            return {
                ...person,
                name: `${person.name} [${animalCount}]`,
            };
        });

        return {
            ...country,
            name: `${country.name} [${people.length}]`,
            people,
        };
    });
}
  
module.exports = { count };
