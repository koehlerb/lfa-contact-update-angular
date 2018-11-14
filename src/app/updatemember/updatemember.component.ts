import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updatemember',
  templateUrl: './updatemember.component.html',
  styleUrls: ['./updatemember.component.css']
})
export class UpdatememberComponent implements OnInit {

  submitted = false;
  problem = false;
  model = {
    email: "",
    phone: ""
  };

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getUpdate( this.route.snapshot.paramMap.get('id') )
      .subscribe( updates => {
        if ( updates.length > 0 ) {
          this.model = updates[0];
        } else {
          this.problem = true;
        }
      });
  }

  onSubmit() {
    this.submitted = true;
    this.data.updateContact( this.model );
  }
}
