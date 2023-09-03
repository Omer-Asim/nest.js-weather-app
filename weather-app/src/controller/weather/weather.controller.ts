import { Controller, Post,Body } from '@nestjs/common';
import { WeatherService } from 'src/service/index';
import {WeatherDto} from "../../dto/index"
@Controller("/weather")
class WeatherController {
  constructor(private readonly service: WeatherService) {}
  @Post()
  async deneme(@Body() WeatherDto: WeatherDto): Promise<WeatherService> {
    console.log("controller dto: ", WeatherDto)
    return await  this.service.main(WeatherDto as WeatherDto);
  }
}
export default WeatherController