import { Component } from '@angular/core'

@Component({
  standalone: true,
  template: `<div class="overlay">
    <img src="assets/images/loading.svg" />
  </div>`,
  styleUrls: ['./loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent {}
