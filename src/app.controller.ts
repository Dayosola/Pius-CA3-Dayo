import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('Hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
