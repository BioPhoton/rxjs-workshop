import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rxws-memory-lake',
  template: `
    <ul>
      <li routerLink="page1">Page 1</li>
      <li routerLink="page2">Page 2</li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryLeakComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
