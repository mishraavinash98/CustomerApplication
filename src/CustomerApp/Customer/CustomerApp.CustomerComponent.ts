import { Component } from '@angular/core';
import { Customer } from "./CustomerApp.model"
import { BaseLogger } from '../Utility/CustomerApp.Logger';


@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer =new Customer();
  CustomerModels : Array<Customer>=new Array<Customer>();
  
  //Centralized dependency injection
  Logobj : BaseLogger = null;
  constructor(_logger : BaseLogger){
    this.Logobj=_logger
    this.Logobj.Log();
  }

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel =new Customer();
  }

  hasError(typeofValidator:string,controlName:string):boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }

}