import { Injectable,Body,BadRequestException,Res,ForbiddenException } from '@nestjs/common';
import axios,{AxiosRequestConfig,AxiosResponse,AxiosError} from "axios"
import {WeatherDto} from "../../dto/index"
import TidtyText from "../../helper/tidyText"
import {BaseResponse as IBaseResponse} from "../../interface/index"
import { HttpService } from '@nestjs/axios';
import { map, catchError ,firstValueFrom} from 'rxjs';

@Injectable()
 class WeatherService {
    constructor(private httpService: HttpService) {}
    async main(WeatherDto:WeatherDto):Promise<any>{
        const {city}=WeatherDto
    try {
        const { data ,status,...others} = (await firstValueFrom(this.httpService.get(`${process.env.BASE_URL!}${city}`,{
            headers:{
                "Authorization": process.env.API_KEY!
            } 
        }))as AxiosResponse<IBaseResponse>);
          console.log(status);
        if(!data?.success) throw new Error(data?.message)
        const tidyTexts=new TidtyText(`${city?.toLocaleUpperCase('tr')} için beklenen 1 haftalık hava durumu:\n`)
       for (const datas of data?.result) {
        const {day,description,min,max,...other}=datas
        tidyTexts.addText(`${day} günü min : ${min}° max : ${max}° ve ${description} bekleniyor.\n`)
       }
        return tidyTexts.getAllTexts()
    } catch (error:any) {
        console.error("error",error)
        throw new BadRequestException(error?.response?.data||error?.message);
    }
  }
}
export default WeatherService



/*
    const {data,status,...other}=(await axios.get(`${process.env.BASE_URL}${city}`,{
            headers:{
                "Authorization":process.env.API_KEY
            }
        })as AxiosResponse<IBaseResponse>)
*/