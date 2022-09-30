export class Testimony {
    avatar : string;
    name : string
    ocupation : string;
    textBody : string;
    date : number;
    sector : string;

    constructor(avatar:string, name:string, ocupation:string, textBody:string, date:number, sector:string) {
        this.avatar = avatar;
        this.name = name;
        this.ocupation = ocupation;
        this.textBody = textBody;
        this.date = date;
        this.sector = sector;
    }
}