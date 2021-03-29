import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heores.module';
import { ContadorModule } from './contadores/contador.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
