import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Municipio } from '../interfaces/Municipio';
@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

constructor(private firestore: Firestore) { }

  obtenerMunicipios(): Observable<string[]> {
    const municipiosRef = collection(this.firestore, 'municipios');
    return collectionData(municipiosRef, {idField: 'id'}).pipe(
      map((municipios: Municipio[]) => municipios.map(municipio => municipio.nombre ))
    );
  }
}
