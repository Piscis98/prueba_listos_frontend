import { Component, OnInit } from '@angular/core';
import { AcronimeService } from '../../services/acronime/acronime.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public data:any[]=[];

  constructor(private acronimeSvc:AcronimeService) {

    this.acronimeSvc.obtenerHistorial(1).then((response)=>{

     this.data=response.data.data;

    }).catch((err)=>{
      console.log(err);
    })

   }

  ngOnInit(): void {
  }

}
