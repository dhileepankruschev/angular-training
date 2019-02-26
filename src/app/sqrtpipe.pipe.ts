
import { Pipe, PipeTransform } from "@angular/core";

//Decorate class with annotation @Pipe
//name mentioned here will be used everywhere to use the pipe
//need to implement PipeTransform
//need to override 'transform' method : this method will hold all logic for transformation
//To make this pipe available, we need to register it in our root module (app.module.ts)
@Pipe({
    name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {

    transform(value: number): number {

        return Math.sqrt(value);

    }

}