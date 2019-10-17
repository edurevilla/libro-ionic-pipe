import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonedasPipe} from './monedas.pipe';


@NgModule({
 imports: [
   CommonModule,
 ],
 declarations: [MonedasPipe],
 exports: [MonedasPipe]
})
export class PipesModule { }