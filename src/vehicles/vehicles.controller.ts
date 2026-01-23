import { Controller, UseGuards, Get, Param, Query } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { ClerkAuthGuard } from 'src/auth/guards/clerk-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('vehicles')
@UseGuards(ClerkAuthGuard, RolesGuard)
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Public()
  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get('filtered')
  findFiltered(@Query() query: VehiclesFilterParamsDto) {
    return this.vehiclesService.findAll(query);
  }

  @Public()
  @Get('featured')
  findFeatured() {
    return this.vehiclesService.findFeatured();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }
}
