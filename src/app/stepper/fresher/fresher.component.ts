import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { experiencedetails } from 'src/app/data/experienceddetail';

@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrls: ['./fresher.component.scss']
})
export class FresherComponent implements OnInit {

  @Input()
  experienceddetail! : experiencedetails;
  
  @Output()
  experienceddetailchange = new EventEmitter<experiencedetails>();

  ngOnInit(): void {
    
  }
  checktechnoloogy(): boolean {
    return this.experienceddetail.technologyex.some(skill => skill.selected);
  }
}
