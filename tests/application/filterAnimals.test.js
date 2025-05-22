const { filterAnimals } = require('../../src/application/filterAnimals');
const { getData } = require('../../src/infrastructure/dataRepository');
const { filter } = require('../../src/domain/filter');
const { testData } = require('../utils/testData');

jest.mock('../../src/infrastructure/dataRepository');
jest.mock('../../src/domain/filter');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('filterAnimals', () => {
    it('should call getData and filter with the correct arguments', () => {
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

        getData.mockReturnValue(testData);
        filter.mockReturnValue(filteredData);

        const result = filterAnimals(pattern);

        expect(getData).toHaveBeenCalledTimes(1);
        expect(filter).toHaveBeenCalledWith(testData, pattern);
        expect(result).toEqual(filteredData);
    });

    it('should return an empty array if no testData matches the pattern', () => {
        const pattern = 'zzz';

        getData.mockReturnValue(testData);
        filter.mockReturnValue([]);

        const result = filterAnimals(pattern);

        expect(getData).toHaveBeenCalledTimes(1);
        expect(filter).toHaveBeenCalledWith(testData, pattern);
        expect(result).toEqual([]);
    });
});