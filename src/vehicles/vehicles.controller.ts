import { Controller, UseGuards, Get, Param, Query } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { ClerkAuthGuard } from 'src/auth/guards/clerk-auth.guard';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('vehicles')
@UseGuards(ClerkAuthGuard)
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Public()
  @Get()
  findAll(@CurrentUser() user: any) {
    console.log('Utilisateur actuel: ', user);
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
