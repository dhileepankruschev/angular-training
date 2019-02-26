
export class NamesService {
    names = ["First", "Second", "Third", "Fourth"];

    getNames() {
        return this.names;
    }


    addName(name: string) {
        this.names.push(name);
    }
}