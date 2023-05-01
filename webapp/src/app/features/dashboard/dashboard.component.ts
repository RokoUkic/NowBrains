import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { LoadingService } from '@services/loading.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  public ngOnInit(): void {
    // Testing api calling
    this.http.get('http://localhost:8080/test').subscribe({
      next: () => {
        console.log()
      },
    })
  }
}
