import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { educationdetails } from 'src/app/data/educationqualification-details';
import { experiencedetails } from 'src/app/data/experienceddetail';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {
  panelOpenState = false;
  invalidYearSelected: boolean = false;

validateYearOfPassing() {
  if (this.logineducationqualification.selectedyear === 'NA') {
    this.invalidYearSelected = true;
  } else {
    this.invalidYearSelected = false;
  }
}
  // isin = false;

  // onexperienceradiobuttonclick(){
  //   const Experience = document.querySelector(".experienced");
  //   if (Experience) {
  //     Experience.setAttribute("id", "experiencevisible");
  //     this.isin = true;
      
  //   }
  // }
  // onfresherradiobuttonclick(){
  //   const Experience = document.querySelector(".experienced");
  //   if (Experience) {
  //     this.isin = false;
  //     if (Experience.hasAttribute("id")) {
  //       setTimeout(() => {
  //         if (!this.isin) {
  //           Experience.removeAttribute("id");
  //         }
  //       }, 300)
  //     }
      
  //   }
  // }

  @Input()
  logineducationqualification!: educationdetails;

  @Output()
  loginpersonaldetailschange = new EventEmitter<educationdetails>();

  @Input()
  qualificationdetail! : experiencedetails;

  @Output()
  qualificationdetailchange = new EventEmitter<experiencedetails>();

  ngOnInit() : void{
    
  }

 }
