import { IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { Logger } from '@nestjs/common';

export class QueryDto {
  @Transform(value => Number(value))
  @IsNumber()
  @IsOptional()
  id?: number;

  @Transform(value => {
    Logger.log(value);
    Logger.log(typeof value);
    Logger.log('');
    return value === 'true';
  })
  @IsBoolean()
  @IsOptional()
  bool?: boolean;
}
