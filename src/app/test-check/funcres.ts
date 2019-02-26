export function calc(val: number): number {
    if (val < 0) {
        return 0;
        //return val; //Failure scenario
    }

    return val + 1;
}