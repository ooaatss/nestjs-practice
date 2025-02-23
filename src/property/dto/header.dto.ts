import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class HeadersDto {
  @IsString({ message: 'El token es requerido' })
  @Expose({
    name: 'access-token',
  })
  accessToken: string;
}
