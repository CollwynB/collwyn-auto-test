import { Injectable } from '@angular/core';
import { getFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  functions = getFunctions(undefined, 'europe-west1');
}
