import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail',
  imports: [RouterLink],
  templateUrl: './recipes-detail.html',
  styleUrl: './recipes-detail.css',
})
export class RecipesDetail {
  recipe = signal<any>(null);

  constructor(private route: ActivatedRoute) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    const found = RECIPES_LIST_DATA.recipes.find((r) => r.id === id);
    this.recipe.set(found || null);
  }
}
