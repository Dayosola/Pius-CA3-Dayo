import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello2(): {} {
    return {message: 'Hello World!', title: 'My Greeting App'};
    }

  getHello(): string {
    return 'Hello World!';
  }
}
