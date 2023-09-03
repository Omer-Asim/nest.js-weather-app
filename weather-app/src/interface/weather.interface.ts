 interface BaseResponse {
    success: boolean
    city?: string
    result?: Result[]
    message?:string
  }
  
   interface Result {
    date: string
    day: string
    icon: string
    description: string
    status: string
    degree: string
    min: string
    max: string
    night: string
    humidity: string
  }
  export default BaseResponse