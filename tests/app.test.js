const { runCLI } = require("../app.js");
const { getData } = require("../src/infrastructure/dataRepository");
const { testData } = require("./utils/testData");

jest.mock("../src/infrastructure/dataRepository");

let mockExit;
let mockConsoleLog;
let mockConsoleError;

const getLogOutput = () => {
    return mockConsoleLog.mock.calls.map((call) => call[0]).join("\n");
}

const getErrorOutput = () => {
    return mockConsoleError.mock.calls.map((call) => call[0]).join("\n");
}

beforeEach(() => {
    jest.clearAllMocks();
    mockExit = jest.spyOn(process, "exit").mockImplementation((code) => {
        throw new Error(`exit ${code}`);
    });
    mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
    mockConsoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
});

afterEach(() => {
    mockExit.mockRestore();
    mockConsoleLog.mockRestore();
    mockConsoleError.mockRestore();
});

describe("CLI (app.js)", () => {
    test('should filter animals matching "ry"', () => {
        getData.mockReturnValue(testData);
        runCLI(["--filter=ry"]);

        const output = getLogOutput();
        expect(output).toContain("John Dory");
        expect(output).toContain("Oryx");
        expect(output).not.toContain("Tiger");
        expect(output).not.toContain("Cat");
    });

    test("should count names and display totals in brackets", () => {
        getData.mockReturnValue(testData);
        runCLI(["--count"]);

        const output = getLogOutput();
        expect(output).toContain("Uzuzozne [1]");
        expect(output).toContain("Lillie Abbott [2]");
    });

    test("should print usage if no arguments are passed", () => {
        expect(() => runCLI()).toThrow("exit 1");

        const output = getErrorOutput();
        expect(output).toMatch(/Usage: node app\.js/);
    });

    test("should show error for unknown argument", () => {
        expect(() => runCLI(["--invalid"])).toThrow("exit 1");

        const output = getErrorOutput();
        expect(output).toMatch(/Unknown argument/);
    });
});
