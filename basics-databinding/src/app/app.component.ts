import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = 'USERNAME';
  userCreationStatus: string = 'A New User has not been created yet.'
  userStore: string = '';

  onCreateUser(event: Event) {
    this.userStore = this.username;
    this.userCreationStatus = 'The User Name was created; it is:  ' + this.userStore;
    this.username = '';
  }
}
