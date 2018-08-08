import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rxws-page2',
  template: `
    <p>
      page2 works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
