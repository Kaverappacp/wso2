import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    username: string = 'admin';
    password: string = 'admin';
    constructor(private http: HttpClient) {}
    ngOnInit() {}
    login(){
        console.log("you clicked Login");
            const loginData = {
              username: this.username,
              password: this.password
            };
       
            this.http.post('https://localhost:9443/oauth2/token', loginData, {
              headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
              }),
              params: {
                'grant_type': 'password',
                'client_id': '0_SLamdSSl_LWrFHOZ98uoOIHBsa',
                'client_secret': '64LD0fefylEyjkGG1vbmGh0cy7Qa'
              }
            }).subscribe(
              (response: any) => {
                console.log('Login successful', response);
                // Save token or handle authentication
              },
              (error:any) => {
                console.error('Login failed', error);
              }
            );
        }
 
    // constructor() {}
    // ngOnInit() {}
    // login(){
    //     console.log("hey using login function");
    // }
}
