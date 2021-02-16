import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import Swal from 'sweetalert2';
import { agregar } from '../todo.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.txtInput = new FormControl('', [Validators.required, Validators.minLength(3)]);

  }

  saveToDo() {
    if (!this.txtInput.valid) {
      Swal.fire({
        title: 'Upsss...',
        text: 'Debes poner mínimo 4 letras.',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    this.store.dispatch(agregar({texto: this.txtInput.value}));
    Swal.fire({
      title: '¡Muy bien!',
      text: 'Tarea agregada.',
      icon: 'success',
      confirmButtonText: 'Entendido'
    });
    this.txtInput.reset();

  }

}
