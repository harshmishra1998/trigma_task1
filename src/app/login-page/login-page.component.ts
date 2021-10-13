import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { default as userData } from '../../assets/mocks/login.json';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  credentials = { username: '', password: '' };
  error = ''
  public userList: { username: string, password: string } = userData.data
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(userData)
  }

  loginClicked() {
    if (this.credentials.username && this.credentials.password) {
      if (this.credentials.username === this.userList.username) {
        if (this.credentials.password === this.userList.password) {
          this.router.navigateByUrl('/table')
        }
        else {
          this.error = `User not Found`
        }
      }
      else {
        this.error = `User not Found`
      }
    }

  }
}
