function filter(data, pattern) {
    return data
        .map((country) => {
            const people = country.people
                .map((person) => {
                    const animals = person.animals.filter((animal) =>
                        animal.name.includes(pattern),
                    );
                    return animals.length ? { ...person, animals } : null;
                })
                .filter(Boolean);

            return people.length ? { ...country, people } : null;
        })
        .filter(Boolean);
}

module.exports = { filter };
