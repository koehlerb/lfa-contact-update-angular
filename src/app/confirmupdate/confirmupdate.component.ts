import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirmupdate',
  templateUrl: './confirmupdate.component.html',
  styleUrls: ['./confirmupdate.component.css']
})
export class ConfirmupdateComponent implements OnInit {

  waiting = true;
  problem = false;
  model = {
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getConfirm( this.route.snapshot.paramMap.get('id') )
      .subscribe( confirms => {
        if ( confirms.length > 0 ) {
          this.model = confirms[0];
          this.waiting = false;
        } else {
          this.problem = true;
        }
      });
  }

}
