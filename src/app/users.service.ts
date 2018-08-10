import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CountService) {}

    updateCurrentArray(id: number, status: boolean) {
        if (status === true) {
            this.activeUsers.push(this.inactiveUsers[id]);
            this.inactiveUsers.splice(id, 1);
            this.countService.incrementCount();
        } else {
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id, 1);
            this.countService.incrementCount();
        }
    }
}
