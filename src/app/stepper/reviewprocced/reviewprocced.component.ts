import { Component, OnInit, Input } from '@angular/core';
import { educationdetails } from 'src/app/data/educationqualification-details';
import { experiencedetails } from 'src/app/data/experienceddetail';
import { personaldetails } from 'src/app/data/personal-detail';

@Component({
  selector: 'app-reviewprocced',
  templateUrl: './reviewprocced.component.html',
  styleUrls: ['./reviewprocced.component.scss'],
})
export class ReviewproccedComponent implements OnInit {

  panelOpenState = false;

  @Input()
  loginpersonaldetailsreview!: personaldetails;
  
  @Input()
  qualificationdetailreview!: educationdetails;

  @Input()
  commondetail!: experiencedetails;

  constructor(){}
  ngOnInit() : void{
}
}
