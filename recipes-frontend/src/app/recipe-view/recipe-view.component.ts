import { Component, OnInit } from '@angular/core';
import { Recipe, Ingredient } from '../models/Recipe';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  recipe = new Recipe()
  constructor() {
    
   }

  ngOnInit(): void {
    
    this.recipe.description = "Pasta and meatballs"
    this.recipe.imgUrl = "http://www.placecage.com/200/300"
    var pasta = new Ingredient()
    pasta.name = "pasta"
    pasta.quantity = 1
    pasta.quantityType = "box"
    pasta.measurement = 1
    pasta.measurementType = "box"
    var meatballs = new Ingredient()
    meatballs.name = "meatballs"
    meatballs.quantity = 5
    meatballs.quantityType = "balls"
    meatballs.measurement = 1
    meatballs.measurementType = "oz"
    this.recipe.ingredients = [meatballs,pasta]
    this.recipe.instructions = ["boil the noodles", "season and sautee the meatballs", "add sauce to cooked meatballs", "drain the noodles and add the meatballs and sauce", "serve immediately"]
    this.recipe.name ="meatballs and pasta"
    this.recipe.tags = ["italian", "meat", "savory"]
  }

}
