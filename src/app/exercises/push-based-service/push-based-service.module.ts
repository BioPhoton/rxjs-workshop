import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {PullListComponent} from './components/pull-list.component';
import {PushListComponent} from './components/push-list.component';
import {PushBasedServiceComponent} from './push-based-service.component';

const ROUTES: Routes = [
  {
    path: 'pull-vs-push-service',
    component: PullListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule
  ],
  declarations: [PushBasedServiceComponent, PullListComponent, PushListComponent],
  exports: [PushBasedServiceComponent]
})
export class PushBasedServiceModule {
}
