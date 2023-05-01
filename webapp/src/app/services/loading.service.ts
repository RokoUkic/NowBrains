import { DOCUMENT } from '@angular/common'
import { ApplicationRef, ComponentRef, createComponent, Inject, Injectable } from '@angular/core'
import { LoadingIndicatorComponent } from '@app-ui/loading-indicator/loading-indicator.component'

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _componentInstanceRef?: ComponentRef<LoadingIndicatorComponent>

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    private appRef: ApplicationRef,
  ) {}

  public open(): void {
    this._componentInstanceRef = createComponent(LoadingIndicatorComponent, {
      environmentInjector: this.appRef.injector,
    })

    this.document.body.appendChild(this._componentInstanceRef.location.nativeElement)
  }

  public close(): void {
    if (this._componentInstanceRef) {
      this.document.body.removeChild(this._componentInstanceRef.location.nativeElement)
    }
  }
}
