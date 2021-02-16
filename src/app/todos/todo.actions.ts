import { createAction, props } from '@ngrx/store';

export const agregar = createAction(
    '[TODO] Agregar',
    props<{ texto: string }>()
);

export const completado = createAction(
    '[TODO] Completado',
    props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] Editar',
    props<{ id: number, texto: string }>()
);

export const eliminar = createAction(
    '[TODO] Eliminar',
    props<{ id: number }>()
);

export const eliminarCompletadas = createAction('[TODO] Eliminar Completadas');

export const markAll = createAction(
    '[TODO] Completar todas',
    props<{ completado: boolean }>()
);
