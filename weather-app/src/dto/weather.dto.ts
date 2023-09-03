import {IsNotEmpty,IsString,MinLength} from "class-validator"

class WeatherDto{
    @IsString()
    @MinLength(3, {message: 'city is too short'})
    @IsNotEmpty()
    city: string;

}
export default WeatherDto