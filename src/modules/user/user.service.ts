import { Injectable } from '@nestjs/common';
import { users } from 'src/moks/userInfo';

@Injectable()
export class UserService {
    getUsers(){
        return users
    }
    getUser(){
        return users[0]
    }
}
