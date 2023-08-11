import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector: "grid-ui",
    templateUrl : "./CustomerApp.Grid.html"
})

export class GridComponent{
    //code behind
    // for the column names
    gridColumns: Array<any> = new Array<any>();
    // grid data 
    gridData: Array<any> = new Array<any>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<any>){
       this.gridColumns = _gridColumns;     
    }
    @Input("grid-data")
    set setGridData(_gridData:Array<any>){
        this.gridData = _gridData;     
     }
     
     @Output("grid-selected")
     eventemitter: EventEmitter<any> = 
     new EventEmitter<any>();

     SelectGrid(_selected:any){
        //Emit out a event. Will send a signal to the UI under which this component is running.
         this.eventemitter.emit(_selected);
     }

}