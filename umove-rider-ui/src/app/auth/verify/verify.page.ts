import {Component, Inject, OnInit} from '@angular/core';
import {WindowService} from '../../service/window/window.service';
import {Router} from '@angular/router';
import {UserProfile} from '../../model/user-profile';
import {Storage} from '@ionic/storage';
import {HTTP} from '@ionic-native/http/ngx';
import {UserProfileServiceService} from '../../service/users-profile/user-profile-service.service';
import {AuthenticationService} from '../../service/authentication-service/authentication.service';

@Component({
    selector: 'app-verify',
    templateUrl: './verify.page.html',
    styleUrls: ['./verify.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class VerifyPage implements OnInit {

    error: boolean;
    windowRef: any;
    key = 'details';
    verificationCode: string;
    localUserData: UserProfile;
    userDataRecieved: UserProfile;
    userData: UserProfile;
    user: any;
    jsonkey = 'token';
    jsonToken: string;
    // inputtext: any;

    // tslint:disable-next-line:max-line-length
    constructor(private win: WindowService, private  router: Router, private http: HTTP , private storage: Storage, private userDataService: UserProfileServiceService, private  authDataService: AuthenticationService) {
        this.error = false;
        this.userData = new UserProfile();
    }

    ngOnInit() {
        this.windowRef = this.win.windowRef;
    }
    verifyLoginCode() {
        this.windowRef.confirmationResult
            .confirm(this.verificationCode)
            .then( result => {
                this.user = result.user;
                // console.log(this.user.phoneNumber);
                this.userData.mobileNumber = this.user.phoneNumber;
                this.userData.roles = ['ROLE_USER'];
                console.log('In Verify Page', this.userData);
                this.authDataService.addUser(this.userData).then(res => {
                    const data = JSON.parse(res.data);
                    this.userDataRecieved = data.data;
                    this.jsonToken = data.token;
                    console.log(this.userDataRecieved.id);
                    console.log(this.jsonToken);
                    this.storage.ready().then(() => {
                        console.log('storing data --', this.userDataRecieved);
                        this.storage.set(this.key, this.userDataRecieved);
                        this.storage.set(this.jsonkey, this.jsonToken);
                        this.storage.get(this.key).then(value => {
                            console.log('this is in storage', value);
                            this.localUserData = value;
                            if (this.localUserData.name != null) {
                                this.router.navigateByUrl('/home');
                            } else {
                                this.router.navigateByUrl('/edit-profile');
                            }
                        });
                    });
                });
                // this.storage.get('').then((val) => {
                //     console.log('Your age is', val);
                // });
                // return this.http.post('http://172.23.234.74:8091/api/v1/users/adduser', this.userData, {}).then(res => {
                //     // console.log(res.data);
                //     this.userDataRecieved = JSON.parse(res.data).data;
                //     console.log(this.userDataRecieved.mobileNumber);
                //     // this.userDataRecieved = res.data;
                // });

            })
            .catch( error => {
                console.log(error, 'Incorrect code entered?');
                this.error = true;
            });
    }
    loadData() {
        this.storage.get(this.key).then(value => {
            console.log('this is in storage', value);
        });
    }
}

