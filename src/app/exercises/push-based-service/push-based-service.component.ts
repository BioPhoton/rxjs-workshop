import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rxws-push-based-service',
  template: `
    <h1>rxws-push-based-service</h1>
    <pull-list>
      List 1
    </pull-list>
    <pull-list>
      List 2
    </pull-list>
    <hr>
    <push-list>
      Push List 1
    </push-list>
    <push-list>
      Push List 2
    </push-list>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushBasedServiceComponent {

  constructor() { }

}
