import { Controller, Get, Param, Query, ParseUUIDPipe } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get('filtered')
  findFiltered(@Query() query: VehiclesFilterParamsDto) {
    return this.vehiclesService.findAll(query);
  }

  @Get('featured')
  findFeatured() {
    return this.vehiclesService.findFeatured();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.vehiclesService.findOne(id);
  }
}
