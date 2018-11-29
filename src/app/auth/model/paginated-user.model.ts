import {User} from './user.model';

export class PaginatedUser {
    current_page: number;
    data: User[];
    from: number;
    last_page: number;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}
