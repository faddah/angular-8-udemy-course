import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles: [`
    .online {
      color: gold;
    }

    .offline {
      color: cornsilk;
    }
  `]
})
export class ServerComponent {
  serverId = (Math.random() * 100).toFixed(0) ;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
