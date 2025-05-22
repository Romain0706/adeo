const { countFilteredNames } = require('../../src/application/countFilteredNames');
const { filterAnimals } = require('../../src/application/filterAnimals');
const { count } = require('../../src/domain/count');

jest.mock('../../src/application/filterAnimals');
jest.mock('../../src/domain/count');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('countFilteredNames', () => {
    it('should call filterAnimals with the provided pattern and then count with the filtered data', () => {
        const pattern = 'ry';
        const filteredData = [
            {
                name: "Uzuzozne",
                people: [
                    {
                        name: "Lillie Abbott",
                        animals: [{ name: "John Dory" }],
                    },
                ],
            },
            {
                name: "Satanwi",
                people: [
                    {
                        name: "Anthony Bruno",
                        animals: [{ name: "Oryx" }],
                    },
                ],
            },
        ];
        const countedFilteredData = [
            {
                name: "Uzuzozne [1]",
                people: [
                    {
                        name: "Lillie Abbott [1]",
                        animals: [{ name: "John Dory" }],
                    },
                ],
            },
            {
                name: "Satanwi [1]",
                people: [
                    {
                        name: "Anthony Bruno [1]",
                        animals: [{ name: "Oryx" }],
                    },
                ],
            },
        ];

        filterAnimals.mockReturnValue(filteredData);
        count.mockReturnValue(countedFilteredData);

        const result = countFilteredNames(pattern);

        expect(filterAnimals).toHaveBeenCalledTimes(1);
        expect(filterAnimals).toHaveBeenCalledWith(pattern);

        expect(count).toHaveBeenCalledTimes(1);
        expect(count).toHaveBeenCalledWith(filteredData);

        expect(result).toBe(countedFilteredData);
    });

    it('should return count result even if filtered data is empty', () => {
        const pattern = 'zzz';
        const filteredData = [];
        const countedData = [];

        filterAnimals.mockReturnValue(filteredData);
        count.mockReturnValue(countedData);

        const result = countFilteredNames(pattern);

        expect(filterAnimals).toHaveBeenCalledWith(pattern);
        expect(count).toHaveBeenCalledWith(filteredData);
        expect(result).toBe(countedData);
    });
});