export class News {
	title : string;
	textBody : string;
	date : number;
	author_img : string;
	author_name : string;
	img : string;

	constructor(title:string, textBody:string, date:number, author_img:string, author_name:string, img:string) {
		this.title = title;
		this.textBody = textBody;
		this.date = date;
		this.author_img = author_img;
		this.author_name = author_name;
		this.img = img;
	}
}