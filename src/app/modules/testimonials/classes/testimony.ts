export class Testimony {
    avatar : string;
    name : string
    ocupation : string;
    textBody : string;
    date : number;
    sector : string;
    icon : string;

    constructor(avatar:string, name:string, ocupation:string, textBody:string, date:number, sector:string, icon:string) {
        this.avatar = avatar;
        this.name = name;
        this.ocupation = ocupation;
        this.textBody = textBody;
        this.date = date;
        this.sector = sector;
        this.icon = icon;
    }
}