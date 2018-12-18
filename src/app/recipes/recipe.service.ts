import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
        'Tasty Pizza',
        'A super-tasty Pizza - just Awesome','https://recipes.timesofindia.com/photo/53110049.cms',
        [
            new Ingredient('Chesse', 1),
            new Ingredient('Coke',2)
        ]),
        new Recipe(
          'Big Fat Burger',
          'what else you need to say?','https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/sonicburger.jpg',
          [
              new Ingredient('Buns',2),
              new Ingredient('Patty',1)
          ])
      ];

      constructor(private slService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

      updateRecipe(index: number,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
      }
}