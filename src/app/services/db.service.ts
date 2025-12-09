import { Injectable} from '@angular/core';
import { Database, ref, set, get, update, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DbService{
  data:any = null
  constructor(private db: Database) {}

  // Obtener una vez
  async getPath(path: string) {
    const snapshot = await get(ref(this.db, path));
    if(snapshot.exists()){
      this.data = snapshot.val()
      return this.data
    }
    return null
  }

  // Escuchar en tiempo real (devuelve Observable)
  listenPath(path: string): Observable<any> {
    return new Observable((subscriber) => {
      const r = ref(this.db, path);
      const unsubscribe = onValue(r, (snap) => {
        subscriber.next(snap.exists() ? snap.val() : null);
      }, (err) => subscriber.error(err));

      return () => unsubscribe(); // cleanup
    });
  }

  // Escribir (set)
  writePath(path: string, value: any) {
    return set(ref(this.db, path), value);
  }

  // Actualizar campos parciales
  updatePath(path: string, value: any) {
    return update(ref(this.db, path), value);
  }
}
