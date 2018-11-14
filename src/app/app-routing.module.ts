import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PickmemberComponent }   from './pickmember/pickmember.component';
import { UpdatememberComponent } from './updatemember/updatemember.component';
import { ConfirmupdateComponent } from './confirmupdate/confirmupdate.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', component: PickmemberComponent },
  { path: 'update/:id', component: UpdatememberComponent },
  { path: 'confirm/:id', component: ConfirmupdateComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
