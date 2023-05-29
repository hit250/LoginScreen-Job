import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { experiencedetails } from 'src/app/data/experienceddetail';



@Component({
  selector: 'app-experienced',
  templateUrl: './experienced.component.html',
  styleUrls: ['./experienced.component.scss']
})
export class ExperiencedComponent implements OnInit {

  selecteddate! :string ;

  removeplaceholder(){
    this.selecteddate = '';
  }
@Input()
experienceddetail! : experiencedetails;

@Output()
experienceddetailchange = new EventEmitter<experiencedetails>();

  ngOnInit() : void{
  }

  checktechnoloogy(): boolean {
    return this.experienceddetail.technologyex.some(skill => skill.selected);
  }
  checktechnoloogyfa(): boolean {
    return this.experienceddetail.technologyfamilier.some(skill => skill.selected);
  }
}
