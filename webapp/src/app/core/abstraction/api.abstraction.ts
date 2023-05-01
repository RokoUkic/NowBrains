import { HttpClient } from '@angular/common/http'

export abstract class ApiAbstraction {
  private readonly baseUrl = 'http://localhost:8080'

  protected readonly path!: string

  protected constructor(protected httpClient: HttpClient) {
    this.path = this.baseUrl + this.definePath()
  }

  protected abstract definePath(): string
}
