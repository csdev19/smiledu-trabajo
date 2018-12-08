import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'items_comprados';

@Injectable({
  providedIn: 'root'
})
export class StorageHandlerService {
  identificador: number = 0;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {}


  public storeOnLocalStorage(item: object): number {
    //get array of tasks from local storage
    const currentTodoList = this.storage.get(STORAGE_KEY) || [];
    // push new task to array
    item['identificador'] = this.identificador++;
    currentTodoList.push(item);
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentTodoList);
    // console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    return this.identificador;
  }
  
  public getOnLocalStorage() {
    // console.log(this.storage.get(STORAGE_KEY));  
    return this.storage.get(STORAGE_KEY) || 'empty';
  }

  public deleteOnLocalStorage() {
    console.log()
    
    return this.storage.remove(STORAGE_KEY);

  }

  
  public deleteOnLocalStorageById(id) {
    let lista = this.getOnLocalStorage(); 
    let lista_nueva = [];
    for(let i=0; i < lista.length; i++) {
      if (i != id) {
        lista_nueva.push(lista[i]);
      } 
    }

    // let obj = 
    // console.log(id);
    // console.log('hola wtf?',lista[id]);
    // console.log(lista[id]);
    console.log(lista[id]);
    console.log(lista_nueva);
    this.storage.set(STORAGE_KEY, lista_nueva);

    // return this.storage.remove(lista[id]);
  }

  public isEmpty() {
    if (this.storage.get(STORAGE_KEY) == null) {
      return true;
    } else {
      return false;
    }
  }
}
