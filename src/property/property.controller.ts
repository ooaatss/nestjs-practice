import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseidpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import {
  createPropertSchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'This action returns all properties';
  }

  @Get(':id/:slug')
  findOne(@Param('id', ParseIntPipe) id: string, @Param('slug') slug: string) {
    return `This action returns a #${id} property with slug ${slug}`;
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createPropertSchema))
  create(@Body() body: CreatePropertyDto) {
    return body;
  }

  @Patch(':id')
  update(@Param('id', ParseIdPipe) id, @Body() body: CreatePropertyZodDto) {
    return body;
  }
}
