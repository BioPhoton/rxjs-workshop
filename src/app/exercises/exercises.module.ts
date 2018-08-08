import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomOperatorsComponent} from './custom-operators/custom-operators.component';
import {HigherOrderOperatorsComponent} from './higher-order-observables/higher-order-observables.component';
import {PushBasedServiceModule} from './push-based-service/push-based-service.module';
import {SingleMultiCastComponent} from './single-multi-cast/single-multi-cast.component';
import {MemoryLeakModule} from './memory-leak/memory-leak.module';
import {PushVsPullBasedCollectionsComponent} from './push-vs-pull-based-collections/push-vs-pull-based-collections.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    CustomOperatorsComponent,
    HigherOrderOperatorsComponent,
    SingleMultiCastComponent,
    PushVsPullBasedCollectionsComponent
  ],
  exports: [
    CustomOperatorsComponent,
    PushBasedServiceModule,
    MemoryLeakModule,
    HigherOrderOperatorsComponent,
    PushVsPullBasedCollectionsComponent,
    SingleMultiCastComponent
  ]
})
export class ExercisesModule {
}
