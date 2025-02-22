import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);

    if (isNaN(val)) {
      throw new BadRequestException('id debe de ser un numero');
    }

    if (val <= 0) {
      throw new BadRequestException('id debe de ser un numero positivo');
    }
    return val;
  }
}
