import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-model',
  templateUrl: './input-model.component.html',
  styleUrls: ['./input-model.component.css']
})
export class InputModelComponent {

  name: string;
  cost: number;
  category: string;

  myFrmGrp: FormGroup;

  //AbstractControl is the base class for the FormControl class
  txt_prod_name: AbstractControl;

  //as soon as we import ReactiveFormsModule : my component's constructor is automatically
  // passed with an argument : and this argument is an object of class FormBuilder

  constructor(fb: FormBuilder) {
    //fb will help to create a formgroup
    //fb.group returns the form group object
    //group function requires the form control collection

    this.myFrmGrp = fb.group({

      //form control object

      // initiate a form control, array will ask for values to initialize different properties of form control
      //default value, css class, validation rules etc can be given in an array

      //angular provides set of inbuilt validation rules (required, pattern matching)
      //We need to explicitly check the validation status of FormControl and FormFroup
      // If all validations are passed, we get true, else false

      //First Parameter: Default Value (Can be empty)
      //Second Parameter: Validations
      "prod_name": ["", Validators.required],

      //More than one validators
      "prod_cost": new FormControl("300", Validators.compose([
        Validators.required,
        //Validators.pattern("[]"),

        //Dont call the function rangeCheck(). Just mention it
        this.rangeCheck
      ])),
      //"prod_cost": new FormControl("300", Validators.required),

      "prod_cat": ["", Validators.required]

      //Pattern matching (various patterns available)
      //Only numbers, alphanumeric etc
      //"prod_cat": ["", Validators.pattern("[]")]
    });

    //Assign formcontrol to another formcontrol
    //txt_prod_name can be used directly in the HTML
    this.txt_prod_name = this.myFrmGrp.controls["prod_name"];
  }

  saveAll(): void {
    //this.name = this.myFrmGrp.controls["prod_name"].value;
    this.name = this.txt_prod_name.value;
    this.cost = parseInt(this.myFrmGrp.controls["prod_cost"].value);
    this.category = this.myFrmGrp.controls["prod_cat"].value;

    //empty the form elements
    this.myFrmGrp.controls["prod_name"].setValue("");
    this.myFrmGrp.controls["prod_cost"].setValue("");
    this.myFrmGrp.controls["prod_cat"].setValue("");
  }

  //Create a function to introduce custom validation
  //return an object of class 'stringMap' : holds collection as key value pair in which key is always string and value can be any type
  // {} represents stringMap
  //Current case: value will be boolean, key will be validator name
  // return true if value doesnt fall in the range
  // true represents it has error
  rangeCheck(txt_cost: FormControl) {
    if (parseInt(txt_cost.value) < 100 || parseInt(txt_cost.value) > 500) {
      return { "range": true };
    }
  }


}
