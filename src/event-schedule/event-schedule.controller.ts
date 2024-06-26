import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventScheduleService } from './event-schedule.service';
import { CreateEventScheduleDto } from './dto/create-event-schedule.dto';
import { UpdateEventScheduleDto } from './dto/update-event-schedule.dto';

@Controller('event-schedule')
export class EventScheduleController {
  constructor(private readonly eventScheduleService: EventScheduleService) {}

  @Post()
  create(@Body() createEventScheduleDto: CreateEventScheduleDto) {
    return this.eventScheduleService.create(createEventScheduleDto);
  }

  @Get()
  findAll() {
    return this.eventScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventScheduleDto: UpdateEventScheduleDto) {
    return this.eventScheduleService.update(+id, updateEventScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventScheduleService.remove(+id);
  }

  @Get('find-by-event/:id')
  findByEvent(@Param('id') eventId: number) {
    return this.eventScheduleService.findByEvent(eventId);
  }

  
}
