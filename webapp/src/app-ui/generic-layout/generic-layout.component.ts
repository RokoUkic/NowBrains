import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-generic-layout',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="container" [style.width.px]="width">
    <div class="row">
      <div class="column">
        <ng-content></ng-content>
      </div>
    </div>
  </div>`,
  styleUrls: ['./generic-layout.component.scss'],
})
export class GenericLayoutComponent {
  @Input() width?: number
}
