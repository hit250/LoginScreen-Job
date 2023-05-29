import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { personaldetails} from 'src/app/data/personal-detail'

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit{
  
  @Input()
  loginpersonaldetails!: personaldetails;

  @Output()
  loginpersonaldetailschange = new EventEmitter<personaldetails>();

  ngOnInit() : void{
    
  }
  checkPreferredJobRoles(): boolean {
    return this.loginpersonaldetails.preferredjobrole.some(job => job.selected);
  }
}
