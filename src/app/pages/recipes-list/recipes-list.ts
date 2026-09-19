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
  activeQueryParams: any = { name: '' };

  filterRecipesList = RECIPES_LIST_DATA.recipes;

  constructor(private router: Router) {}

  filterRecipes() {
    const isName = this.filterType === 'NAME';
    const query = isName ? { name: this._name } : { difficulty: this._difficulty };

    this.router.navigate(['/recipes-detail-v2'], { queryParams: query });
  }

  viewDetails(id: number) {
    this.router.navigate(['/recipes-detail', id]);
  }
}
