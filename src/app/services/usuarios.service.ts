  import { Injectable } from '@angular/core';
  import { Firestore, collection, addDoc } from '@angular/fire/firestore';
  import { AngularFirestore } from '@angular/fire/compat/firestore';
  import { Usuario } from '../interfaces/Usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

  @Injectable({
    providedIn: 'root'
  })
  export class UsuariosService {

  constructor(private firestore: Firestore ) { }

    /* checkConnection() {
      return this.firestore.collection('municipios').valueChanges();
    } */
  addAlumno(usuario: Usuario): Observable<void> {
    return new Observable<void>((observer) => {
      /* try {
        // Validar los datos del usuario antes de agregarlo a la base de datos
        if (!this.validarUsuario(usuario)) {
          // usuario.rol_id = 'alumno';
          throw new Error('Los datos introducidos no son válidos');
        } */
  
        // Agregar el usuario a la colección "usuarios" en Firestore
        const usuarioRef = collection(this.firestore, 'usuarios');
        addDoc(usuarioRef, usuario);
     /*  } catch (error) {
        console.error('Error al agregar usuario:', error);
        throw error; // Propagar el error para que pueda ser manejado en el componente que llama a este método
      } */
    }).pipe(
      catchError((error) => {
        console.error('Error en el observable', error);
        return throwError(error);
      })
    )
    
  }

  private validarUsuario(usuario: Usuario): boolean {

    if (!usuario.nombre_usuario || !usuario.email_usuario || !usuario.rol_id || 
      !usuario.fecha_nacimiento_usuario) {
    return false; // Devolver false si algún campo obligatorio está en blanco
  }
  return true; 
  }
}
  

