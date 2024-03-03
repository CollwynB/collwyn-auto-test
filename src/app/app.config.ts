import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'collwyn-auto-test',
          appId: '1:532720131400:web:d7b4a7f89c6c933e28677d',
          storageBucket: 'collwyn-auto-test.appspot.com',
          apiKey: 'AIzaSyB5MFsHWOLZ43IVszSzlG5_lXEewbTfecQ',
          authDomain: 'collwyn-auto-test.firebaseapp.com',
          messagingSenderId: '532720131400',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideFunctions(() => getFunctions())),
  ],
};
