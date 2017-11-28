import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { DomainOnlyPipe } from './domain-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ItemsComponent,
    ItemComponent,
    DomainOnlyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
