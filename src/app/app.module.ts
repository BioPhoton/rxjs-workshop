import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ExercisesModule} from './exercises/exercises.module';
import {RouterModule, Routes} from '@angular/router';
import {
  HigherOrderOperatorsComponent
} from './exercises/higher-order-observables/higher-order-observables.component';
import {CustomOperatorsComponent} from './exercises/custom-operators/custom-operators.component';
import {PushVsPullBasedCollectionsComponent} from './exercises/push-vs-pull-based-collections/push-vs-pull-based-collections.component';
import {SingleMultiCastComponent} from './exercises/single-multi-cast/single-multi-cast.component';
import {MemoryLeakModule} from './exercises/memory-leak/memory-leak.module';

const ROUTES: Routes = [
  {
    path: 'custom-operators',
    component: CustomOperatorsComponent
  },
  {
    path: 'higher-order',
    component: HigherOrderOperatorsComponent
  },
  {
    path: 'push-vs-pull-collections',
    component: PushVsPullBasedCollectionsComponent
  },
  {
    path: 'single-multi-cast',
    component: SingleMultiCastComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExercisesModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
