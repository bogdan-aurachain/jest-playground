import { sum } from "@/assets/jsCommons";

describe("it will test common js function sum", () => {
    test("it adds two valid numbers", () => {
        expect(sum(2, 3)).toBe(5);
    });

    test("it nulls wrong parameters", () => {
        expect(sum(2, null)).toBeNull();
        expect(sum(null, 2)).toBeNull();
    });
});