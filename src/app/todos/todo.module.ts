import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from '../pipes/filtro.pipe';



@NgModule({
  declarations: [AddComponent, TodoFooterComponent, ItemComponent, ListComponent, PageComponent, FiltroPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PageComponent]
})
export class TodoModule { }
