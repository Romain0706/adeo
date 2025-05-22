const { countNames } = require('../../src/application/countNames');
const { getData } = require('../../src/infrastructure/dataRepository');
const { count } = require('../../src/domain/count');
const { testData } = require('../utils/testData');

jest.mock('../../src/infrastructure/dataRepository');
jest.mock('../../src/domain/count');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('countNames', () => {
    it('should call getData and count with the correct arguments', () => {
        const countedData = [
            {
                name: "Uzuzozne [1]",
                people: [
                    {
                        name: "Lillie Abbott [2]",
                        animals: [{ name: "John Dory" }, { name: "Tiger" }],
                    },
                ],
            },
            {
                name: "Satanwi [1]",
                people: [
                    {
                        name: "Anthony Bruno [2]",
                        animals: [{ name: "Oryx" }, { name: "Crow" }],
                    },
                ],
            },
            {
                name: "Dillauti [1]",
                people: [
                    {
                        name: "Winifred Graham [2]",
                        animals: [{ name: "Cat" }, { name: "Duck" }],
                    },
                ],
            },
        ];

        getData.mockReturnValue(testData);
        count.mockReturnValue(countedData);

        const result = countNames();

        expect(getData).toHaveBeenCalledTimes(1);
        expect(count).toHaveBeenCalledWith(testData);
        expect(result).toBe(countedData);
    });
});