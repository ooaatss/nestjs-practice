import { IsInt, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ message: 'El nombre debe ser un string y requerido' })
  name: string;

  @IsString()
  @Length(2, 10, {
    message: 'La descripcion debe de tener entre 3 y 10 caracteres',
    groups: ['create'],
  })
  @Length(1, 10, {
    message: 'La descripcion debe de tener entre 3 y 10 caracteres',
    groups: ['update'],
  })
  description: string;

  @IsInt()
  area: number;
}
