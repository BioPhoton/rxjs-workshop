import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomOperatorsComponent } from './custom-operators/custom-operators.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HigherOrderObservablesComponent} from './higher-order-observables/higher-order-observables.component';
import {PushBasedServiceModule} from './push-based-service/push-based-service.module';
import {MemoryLakeModule} from './memory-lake/memory-lake.module';
import {RouterModule} from '@angular/router';
import { SingleMultiCastComponent } from './single-multi-cast/single-multi-cast.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PushBasedServiceModule,
    MemoryLakeModule
  ],
  declarations: [CustomOperatorsComponent, HigherOrderObservablesComponent, SingleMultiCastComponent],
  exports: [
    PushBasedServiceModule,
    MemoryLakeModule,
    CustomOperatorsComponent, HigherOrderObservablesComponent, SingleMultiCastComponent]
})
export class ExercisesModule { }
