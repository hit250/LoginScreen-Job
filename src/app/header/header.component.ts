import { Component, ViewChild ,Input} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { personaldetails } from '../data/personal-detail';
import { educationdetails } from '../data/educationqualification-details';
import { experiencedetails } from '../data/experienceddetail';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  stepper!: MatStepper;
  @Input()
  personal!: personaldetails;
  @Input()
  education!: educationdetails;
  @Input()
  experience!: experiencedetails;
  

  isbuttondisable() : boolean{
    const currentIndex = this.stepper ? this.stepper.selectedIndex : 0;
    return currentIndex === 0 || currentIndex === 1;
  }

  showdetails(){
    console.log(this.personal);
    console.log(this.education);
    console.log(this.experience);
  }
}
