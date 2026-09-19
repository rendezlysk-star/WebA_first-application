import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail-v2',
  imports: [RouterLink],
  templateUrl: './recipes-detail-v2.html',
  styleUrl: './recipes-detail-v2.css',
})
export class RecipesDetailV2 {
  name = input<string>('');
  difficulty = input<string>('');

  filterRecipesList = computed(() => {
    const searchName = (this.name() || '').trim().toLowerCase();
    const searchDiff = (this.difficulty() || '').trim().toLowerCase();

    return RECIPES_LIST_DATA.recipes.filter((x) => {
      const matchName = searchName ? x.name.toLowerCase().includes(searchName) : true;
      const matchDiff = searchDiff ? x.difficulty.toLowerCase().includes(searchDiff) : true;

      return matchName && matchDiff;
    });
  });
}
