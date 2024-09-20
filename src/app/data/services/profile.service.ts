import   {HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {Profile} from '../interfaces/profile.interface';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    http = inject(HttpClient)



    baseApiUrl = 'https://api.npoint.io'
    getTestAccounts() {
        return this.http.get<Profile[]>(`${this.baseApiUrl}/3b678938f77a8caf8c5d`)
    }

    getMe() {
        return this.http.get<Profile>(`${this.baseApiUrl}account/subscribers`)
    }
}