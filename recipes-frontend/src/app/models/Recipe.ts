export class Ingredient{
    name:string;
    quantity:number
    quantityType:string
    measurement:number
    measurementType:string
}

export class Recipe{
    instructions: String[];
    ingredients: Ingredient[];
    name:String;
    tags: String[];
    description: String;
    imgUrl:String;


}

