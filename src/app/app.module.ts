import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { PokemonListComponent } from "./components/pokemon/pokemon-list.component";
import { PokemonDetailComponent } from "./components/pokemon/pokemon-detail.component";
import { PokemonService } from "./components/pokemon/pokemon-service";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }