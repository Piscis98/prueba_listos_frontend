import { Component, OnInit } from '@angular/core';
import { AcronimeService } from 'src/app/shared/services/acronime/acronime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private acronimeSvc:AcronimeService) { }

  ngOnInit(): void {
    
  }

}
