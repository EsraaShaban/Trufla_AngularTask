import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormMode } from "src/app/SharedModule/Enums/enums";
import { SharedService } from "src/app/SharedModule/Services/shared.service";

@Injectable()
export class ProductModel {

  //==========================Data======================
  public mode: FormMode = FormMode.Add;
  public formFields;
  public dynamicForm: FormGroup = new FormGroup({});

  constructor(private sharedService: SharedService) {
    // Load Form Fields from json
    this.loadFormFiels();
  }

  // Get Title
  public get Title() {
    return this.mode == FormMode.Add ? "Add Product" : "Edit Product";
  }

  // Load Form Fields
  public loadFormFiels() {
    this.sharedService.getFormJsonData().subscribe(res => {
      this.formFields = res;
      // Load Form Validations
      this.loadFormValidations();
    })
  }

  // Load Form Validations
  public loadFormValidations() {
    let controls = {};
    this.formFields.forEach(res => {
      let validations = [];
      res.validations.forEach(val => {
        if (val.name === 'required')
          validations.push( Validators.required );

        if (val.name === 'pattern')
          validations.push( Validators.pattern(val.validator) );

        if (val.name === 'minlength')
          validations.push( Validators.minLength(val.validator) );

        if (val.name === 'maxlength')
          validations.push( Validators.maxLength(val.validator) );
      });
      controls[res.name] = new FormControl('', validations);
    });
    this.dynamicForm = new FormGroup(controls);
  }

}
