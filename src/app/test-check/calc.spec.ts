import { calc } from "./funcres";
//test suite
describe("calc-check", () => {

    //testcases / spec : it()

    //positive scenario
    it("should return 0 if value is incremented by 1", () => {
        const response = calc(4);

        //Assert: to test the status
        //.toBe here is a matcher function
        expect(response).toBe(5);
    })

    //negative scenario
    it("should return 0 if value is negative", () => {
        const response = calc(-4);

        //Assert: to test the status
        //.toBe here is a matcher function
        expect(response).toBe(0);
    })
})