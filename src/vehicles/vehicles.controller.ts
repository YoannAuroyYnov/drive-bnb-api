import {
  Controller,
  UseGuards,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateCarDto, CreateMotorbikeDto, CreateHelicopterDto } from './dto/create-vehicle.dto';
import { UpdateCarDto, UpdateMotorbikeDto, UpdateHelicopterDto } from './dto/update-vehicle.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { userRoles } from 'src/users/entities/user.entity';
import { VehiclesFilterParamsDto } from './dto/vehicle-filter-params.dto';

@Controller('vehicles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @Roles(userRoles.ADMIN, userRoles.OWNER)
  create(
    @Body()
    createVehicleDto: CreateCarDto | CreateMotorbikeDto | CreateHelicopterDto,
  ) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  findAll(@Query() query: VehiclesFilterParamsDto) {
    return this.vehiclesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Patch(':id')
  @Roles(userRoles.ADMIN, userRoles.OWNER)
  update(
    @Param('id') id: string,
    @Body()
    updateVehicleDto: UpdateCarDto | UpdateMotorbikeDto | UpdateHelicopterDto,
  ) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  @Roles(userRoles.ADMIN, userRoles.OWNER)
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
