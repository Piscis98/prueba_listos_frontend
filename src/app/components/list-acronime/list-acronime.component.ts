import { Component, OnDestroy, OnInit } from '@angular/core';
import { Acronime } from 'src/app/shared/models/acronime';
import { AcronimeService } from 'src/app/shared/services/acronime/acronime.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/shared/models/store';
import { ADD_TODO } from 'src/app/actions';

@Component({
  selector: 'app-list-acronime',
  templateUrl: './list-acronime.component.html',
  styleUrls: ['./list-acronime.component.scss']
})
export class ListAcronimeComponent implements OnInit {


  private subs:Subscription=new Subscription();

  public search=new FormControl('');

  public data:Acronime[]=[];


  constructor(private acronimeSvc:AcronimeService, public dialog: MatDialog, private ngRedux:NgRedux<IAppState>) { 

    this.ngRedux.subscribe(()=>{

      const store = this.ngRedux.getState();

      this.data=store.acronimes;

    })

  }

  ngOnInit(): void {

    // this.buscar();

  }


  buscar(valor:string){


    this.acronimeSvc.obtenerSiginificados(valor)
    .then((response)=>{

      this.ngRedux.dispatch({type:ADD_TODO, data:response.data.drinks})
     
     }).catch((err)=>{
       console.log(err)
     });


     this.acronimeSvc.crearHistorial(1,valor).then((res)=>{

      console.log(res);

     }).catch((err)=>{
       console.log(err)
     });

  }



  verHistorial(){
    
    const dialogRef = this.dialog.open(DialogComponent,{


      width:'400px',
      height:'90%',
      maxHeight:'95%',
      maxWidth:'95%',
      autoFocus:false,
      panelClass:'custom-dialog-container',
      data:{
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }


}
