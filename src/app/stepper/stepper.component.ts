import { Component, OnInit, ViewEncapsulation, ViewChild ,Output, EventEmitter, Input} from '@angular/core';
import { personaldetails } from '../data/personal-detail';
import { educationdetails } from '../data/educationqualification-details';
import { experiencedetails } from '../data/experienceddetail';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class StepperComponent implements OnInit {
  
  @ViewChild('stepper')stepperfirst !: MatStepper;
  
  // @Output()
  // stepperChange = new EventEmitter<MatStepper>();
  

  constructor(){

  }
  ngOnInit(): void {
  }

  personaldetails : personaldetails = new personaldetails(
    "",
    "",
    "",
    "",
    "",
    [
      {
        name : 'instructional Design',
        selected : true
      },
      {
        name : 'software Engineer',
        selected : false
      },
      {
        name : 'software Quality Engineer',
        selected : false
      }
    ],
    "-",
    false
  );
    
  educationdetails : educationdetails = new educationdetails(
    0,
    {"row-1": "2020",
    "row-2": "2021",
    "row-3": "2022",
    "row-4": "NA"
    },
    "row-4",
    {
      "row-1" : "Bachlore in Engineering(BE)",
      "row-2" : "Bachlore in Technology(B.Tech)",
      "row-3": "NA"
      
    },
    "row-3",
    {
      "row-1" : "information technology",
      "row-2" : "computer Engineering",
      "row-3": "NA"
    },
    "row-3",
    {
      "row-1" : "LD College of engineering",
      "row-2" : "Daiict",
      "row-3" : "DDU",
      "row-4": "NA"
    },
    "row-4",
  "",
  "",
  [
    {
      name : "Fresher",
      value : "fresher",
      selected : true
    },
    {
      name : "Experienced",
      value : "experienced",
      selected : false
    }
  ],
  "fresher"
  );

 experienceddetails : experiencedetails = new experiencedetails(
    5,
    500000,
    650000,
    [
      {
        name : 'JavaScript',
        selected : true
      },
      {
        name : 'AngularJs',
        selected : false
      },
      {
        name : 'React',
        selected : false
      },
      {
        name : 'Node Js',
        selected : false
      },
      {
        name : 'other',
        selected : false
      }
    ],
    "",
    [
      {
        name : 'JavaScript',
        selected : true
      },
      {
        name : 'AngularJs',
        selected : false
      },
      {
        name : 'React',
        selected : false
      },
      {
        name : 'Node Js',
        selected : false
      },
      {
        name : 'other',
        selected : false
      }
    ],
    "",
    [
      {
        name : 'Yes',
        value : "yes"
      },
      {
        name : 'No',
        value : "no"
      }
    ],
    "",
    "",
    {
      "row-1" : "2 months",
      "row-2" : "3 months",
      "row-3" : "4 months",
      "row-4" : "NA"
    },
    "row-4",
    [
      {
        name : 'Yes',
        value : "y",
      },
      {
        name : 'No',
        value : "n",
      }
    ],
    "",
    ""

  );


}

