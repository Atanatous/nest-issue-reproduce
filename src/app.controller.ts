import { Controller, Get, Query, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryDto } from './query.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() param: QueryDto): string {
    Logger.log(param);
    return this.appService.getHello();
  }
}
