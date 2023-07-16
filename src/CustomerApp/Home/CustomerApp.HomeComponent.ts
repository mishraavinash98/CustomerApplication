import { Component , Injector } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.HomeView.html'
})
export class HomeComponent {

  //conditional dependency injection
  Logobj : BaseLogger = null;
  constructor(_injector : Injector){
    this.Logobj=_injector.get("1");
    this.Logobj.Log();
  }

}