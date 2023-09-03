class TidtyText{
    text:string
    constructor(text:string){
        this.text = text;
    }
    addText(msg:string):String{
        return this.text += msg;
    }
    getAllTexts():string{
        return this.text
    }
}
export default TidtyText