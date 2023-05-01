import { HttpClient } from '@angular/common/http';

export abstract class ApiAbstraction {
  private readonly baseUrl = '';

  protected readonly path!: string;

  protected constructor(protected httpClient: HttpClient) {
    this.path = this.baseUrl + this.definePath();

    if (!this.path) {
      throw new Error('Path must be defined.');
    }
  }

  protected abstract definePath(): string;
}
