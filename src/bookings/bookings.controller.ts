import {
  Controller,
  UseGuards,
  Get,
  Post,
  Body,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { userRoles } from 'src/users/entities/user.entity';
import { BookingsFilterParamsDto } from './dto/bookings-filter-params.dto';
import { ClerkAuthGuard } from 'src/auth/guards/clerk-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('bookings')
@UseGuards(ClerkAuthGuard, RolesGuard)
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  @Get()
  @Roles(userRoles.ADMIN)
  findAll(@Query() query: BookingsFilterParamsDto) {
    return this.bookingsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingsService.update(id, updateBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingsService.remove(id);
  }
}
