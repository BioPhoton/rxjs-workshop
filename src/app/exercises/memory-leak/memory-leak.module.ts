import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page1Component} from './components/page1/page1.component';

import {Page2Component} from './components/page2/page2.component';
import {MemoryLeakComponent} from './memory-leak.component';

const ROUTES: Routes = [
  {
    path: 'memory-leak',
    component: MemoryLeakComponent,
    children: [
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [MemoryLeakComponent, Page1Component, Page2Component],
  exports: []
})
export class MemoryLeakModule {
}
