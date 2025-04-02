import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-queue-page',
  templateUrl: './queue-page.component.html',
  styleUrls: ['./queue-page.component.css']
})
export class QueuePageComponent {
  currentQueue: string = '';

  constructor(private queueService: QueueService, private router: Router) {}

  issueQueue() {
    this.queueService.issueQueue().subscribe((res: any) => {
      this.currentQueue = res.queueNumber;
      this.router.navigate(['/display', this.currentQueue]);
    });
  }

  resetQueue() {
    this.queueService.resetQueue().subscribe((res: any) => {
      this.currentQueue = res.queueNumber;
      this.router.navigate(['/display', this.currentQueue]);
    });
  }
}
