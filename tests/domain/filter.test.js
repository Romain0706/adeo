const { filter } = require("../../src/domain/filter");
const { testData } = require("../utils/testData");

describe("filter()", () => {
    test('filters animals containing "ry"', () => {
        const result = filter(testData, "ry");

        expect(result).toEqual([
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
        ]);
    });

    test('filters animals containing "ca" regardless of case sensitivity', () => {
        const result = filter(testData, "ca");

        expect(result).toEqual([
            {
                name: "Dillauti",
                people: [
                    {
                        name: "Winifred Graham",
                        animals: [{ name: "Cat" }],
                    },
                ],
            },
        ]);
    });

    test("returns empty array if no animals match", () => {
        const result = filter(testData, "zzz");
        expect(result).toEqual([]);
    });
});
