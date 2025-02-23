import { PropertyService } from './property.service';
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
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseidpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertSchema } from './dto/createPropertyZod';
import { HeadersDto } from './dto/header.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}
  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id/:slug')
  findOne(@Param('id', ParseIntPipe) id: string, @Param('slug') slug: string) {
    this.propertyService.findOne();
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createPropertSchema))
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.create();
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body() body: CreatePropertyDto,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true }))
    header: HeadersDto,
  ) {
    return this.propertyService.update();
  }
}
