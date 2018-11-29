import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {PaginatedUser} from '../../auth/model/paginated-user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private apiUser: string = '/users';
    public isLoading: boolean = false;

    constructor(private http: HttpClient) {
    }

    getUsers(): Promise<PaginatedUser> {
        this.isLoading = true;
        return this.http.get(`${environment.api_url}` + this.apiUser)
            .toPromise()
            .then((response) => {
                this.isLoading = false;
                return response as PaginatedUser;
            })
            .catch(this.handleError);
    }


    getUsersAtUrl(url: string): Promise<PaginatedUser> {
        this.isLoading = true;
        return this.http.get(url)
            .toPromise()
            .then((response) => {
                this.isLoading = false;
                return response as PaginatedUser;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

