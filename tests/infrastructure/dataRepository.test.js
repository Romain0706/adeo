const { getData } = require('../../src/infrastructure/dataRepository');

jest.mock('../../data', () => ({
    data: {
        key: 'value',
        nested: {
            array: [1, 2, 3],
            object: { innerKey: 'innerValue' },
        },
    },
}));

describe('dataRepository', () => {
    it('should return a deep copy of the data', () => {
        const originalData = require('../../data').data;
        const result = getData();

        expect(result).toEqual(originalData);
        expect(result).not.toBe(originalData); // should be a copy, not a reference
    });
});