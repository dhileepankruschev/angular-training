
import { NamesService } from "./names.service";
describe("name-service-check", () => {

    //instead of initiating the object of the class everytime in each testcase, object creation
    //can be outsourced
    let nameServ: NamesService;

    //beforeEach will be invoked automatically before each testcase
    beforeEach(() => {
        //setup that needs to be run before each testcase
        //setup functionality
        nameServ = new NamesService();

    })

    //afterEach will be invoked automatically after each testcase
    afterEach(() => {
        //perform some clean up after each testcase
        //teardown functionality

    })

    //gets invoked once for a test suite before any testcase is run
    beforeAll(() => {
        //initial setup

    })

    it("should check if specified name is present in the list", () => {

        //need to create instance of the class
        // let nameServ = new NamesService();
        const names = nameServ.getNames;

        expect(names).toContain("Fourth");

    })
})