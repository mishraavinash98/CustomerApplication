import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { BaseLogger, ConsoleLogger, DBLogger } from '../Utility/CustomerApp.Logger';

var providersCollection:any=[];
//http call gets this from the server
providersCollection.push({provide :  "1", useClass : DBLogger});
providersCollection.push({provide :  "2", useClass : ConsoleLogger});
providersCollection.push({provide : BaseLogger, useClass : ConsoleLogger});

@NgModule({
  declarations: [   
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule
  ],
  providers: [providersCollection ],
  bootstrap: [MasterPageComponent]
})

export class MainModule { }