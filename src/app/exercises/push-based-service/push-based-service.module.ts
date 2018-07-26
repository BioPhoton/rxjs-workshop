import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushBasedServiceComponent } from './push-based-service.component';
import {PullListComponent} from './components/pull-list.component';
import {PushListComponent} from './components/push-list.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PushBasedServiceComponent, PullListComponent, PushListComponent ],
  exports: [PushBasedServiceComponent]
})
export class PushBasedServiceModule { }
