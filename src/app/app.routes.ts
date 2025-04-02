import { Routes } from '@angular/router';
import { QueuePageComponent } from './queue-page/queue-page.component';
import { QueueDisplayComponent } from './queue-display/queue-display.component';

export const routes: Routes = [
  { path: '', component: QueuePageComponent },
  { path: 'display/:queueNumber', component: QueueDisplayComponent },
  { path: '**', redirectTo: '' }
];
