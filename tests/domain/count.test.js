const { count } = require("../../src/domain/count");
const { testData } = require("../utils/testData");

describe("count application", () => {
    test("adds counts in country and people names", () => {
        const result = count(testData);

        expect(result).toEqual([
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
        ]);
    });
});
