import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-queue-display',
  templateUrl: './queue-display.component.html',
  styleUrls: ['./queue-display.component.css']
})
export class QueueDisplayComponent implements OnInit {
  queueNumber!: string;
  currentDateTime: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.queueNumber = this.route.snapshot.paramMap.get('queueNumber') || '';
    this.currentDateTime = new Date().toLocaleString();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
