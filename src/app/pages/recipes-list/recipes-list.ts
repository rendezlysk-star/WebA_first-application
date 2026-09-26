import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
})
export class RecipesList {
  filterType = 'NAME';
  _name = '';
  _difficulty = '';

  recipesList = RECIPES_LIST_DATA;
  _recipesListFilter = this.recipesList.recipes;

  constructor(private router: Router) {}

  get canFilter(): boolean {
    if (this.filterType === 'NAME') {
      return this._name.trim().length > 0;
    }
    if (this.filterType === 'DIFFICULTY') {
      return this._difficulty.trim().length > 0;
    }
    return false;
  }

  filterRecipesList(): void {
    const isName = this.filterType === 'NAME';
    const name = this._name.trim().toLowerCase();
    const diff = this._difficulty.trim().toLowerCase();

    this._recipesListFilter = this.recipesList.recipes.filter((r) =>
      isName ? r.name.toLowerCase().includes(name) : r.difficulty.toLowerCase().includes(diff),
    );
  }

  filterRecipesListExternal(): void {
    this.router.navigate(['/recipes-detail-v2'], {
      queryParams:
        this.filterType === 'NAME' ? { name: this._name } : { difficulty: this._difficulty },
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/recipes-detail', id]);
  }

  viewDetailV2() {
    this.router.navigate(['/recipes-detail-v2'], {
      queryParams: this._name ? { name: this._name } : { difficulty: this._difficulty },
    });
  }
}
