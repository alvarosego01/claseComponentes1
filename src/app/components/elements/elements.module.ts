import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { StaticComponent } from './static/static.component';
import { BrowserModule } from '@angular/platform-browser';
import { RetornoComponent } from './retorno/retorno.component';



@NgModule({
  declarations: [

    ImageComponent,

    StaticComponent,

    RetornoComponent

  ],
  exports: [
    ImageComponent,
    StaticComponent,
    RetornoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ]
})
export class ElementsModule { }
