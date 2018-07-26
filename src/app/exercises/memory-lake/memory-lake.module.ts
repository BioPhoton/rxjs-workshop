import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2Component } from './components/page2/page2.component';
import {RouterModule, Routes} from '@angular/router';
import {MemoryLakeComponent} from './memory-lake.component';
import {Page1Component} from './components/page1/page1.component';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    RouterModule.forChild(routes)
  ],
  declarations: [MemoryLakeComponent, Page1Component, Page2Component],
  exports: [MemoryLakeComponent]
})
export class MemoryLakeModule { }
