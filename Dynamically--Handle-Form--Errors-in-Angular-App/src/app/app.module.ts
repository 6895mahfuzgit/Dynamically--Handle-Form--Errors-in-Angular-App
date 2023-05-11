import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromDirectives from '../directives';
import * as fromComponents from '../components';
import * as fromPipes from '../pipes';

@NgModule({
  declarations: [
    AppComponent,
    ...fromDirectives.directives,
    ...fromComponents.components,
    ...fromPipes.pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //imported modules
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
