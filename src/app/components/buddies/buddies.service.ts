import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { NGROK } from '../../../config';

@Injectable({providedIn: 'root'})
export class BuddiesService {
    private _buddies = new BehaviorSubject(null);

    constructor(private http: HttpClient) {}

    get buddies() {
        return this._buddies.asObservable();
    }

    getBuddies(userId: number) {
        return this.http.get(
            `${NGROK}/buddies/all/${userId}`
        ).subscribe(response => {
            this._buddies.next(response);
            console.log(response)
        }) 
    }


}