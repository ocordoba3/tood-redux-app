import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import Swal from 'sweetalert2';
import { Todo } from '../models/todo';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputChange') inputChange: ElementRef;
  chkCompleted: FormControl;
  txtEdit: FormControl;
  editing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkCompleted = new FormControl(this.todo.completado);
    this.txtEdit = new FormControl(this.todo.texto, [Validators.required, Validators.minLength(3)]);

    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.completado({ id: this.todo.id }));
      if(!this.todo.completado){
        Swal.fire({
          title: '¡Muy bien!',
          text: 'Haz finalizado la tarea.',
          icon: 'success',
          confirmButtonText: 'Entendido'    
        });
      }
    });
  }

  toEdit() {
    this.editing = true;
    this.txtEdit.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputChange.nativeElement.select();
    }, 100);
  }

  endEdition() {
    this.editing = false;

    if (this.txtEdit.value === this.todo.texto) {
      return;
    }

    if (this.txtEdit.invalid) {
      Swal.fire({
        title: 'Upsss...',
        text: 'Debes poner mínimo 4 letras.',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    this.store.dispatch(actions.editar({ id: this.todo.id, texto: this.txtEdit.value }));
    Swal.fire({
      title: '¡Muy bien!',
      text: 'Haz modificado la tarea.',
      icon: 'success',
      confirmButtonText: 'Entendido'
    });
  }

  delete() {
    Swal.fire({
      text: '¿Quieres eliminar esta tarea?',
      icon: 'warning',
      confirmButtonText: 'Si',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then( resp => {
      if(resp.isConfirmed) {
        this.store.dispatch(actions.eliminar({id: this.todo.id}));
        Swal.fire({
          title: '¡Muy bien!',
          text: 'Haz eliminado la tarea.',
          icon: 'success',
          confirmButtonText: 'Entendido'    
        });
      }
    })
  }

}
