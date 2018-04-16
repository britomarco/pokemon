import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./components/pokemon/pokemon-list.component";
import { PokemonDetailComponent } from "./components/pokemon/pokemon-detail.component";

const routes: Routes = [
  { path: "", component: PokemonListComponent },
  { path: "details/:id", component: PokemonDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }