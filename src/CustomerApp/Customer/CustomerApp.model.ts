import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    
    //3 steps for adding validation
    //Create : We create the object model
    //Connect : we connect the validation with UI/HTML
    //Check : IsValid/IsDirty

    formCustomerGroup : FormGroup = null; //Create object of FormGroup
    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({}); //Use the builder to create

        //Control-> Validation
        //1 control -> 1 validation
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));

        //Customer Code Control-> Required and 4 letter numeric
        var validationCollection=[];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"));
        this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.compose(validationCollection)));
    }

}