import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pickmember',
  templateUrl: './pickmember.component.html',
  styleUrls: ['./pickmember.component.css']
})
export class PickmemberComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  submitted = false;

  email = "";

  captcha = "";

  onSubmit() {
    this.submitted = true;
    this.data.createUpdate( this.email, this.captcha );
  }

}
