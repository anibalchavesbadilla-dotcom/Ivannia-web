import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { GetInformationDataService } from './components/get-information-data.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export function initApp(datosService: GetInformationDataService) {
  return () => datosService.cargarDatos();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [GetInformationDataService],
      multi: true,
    },
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ivannia-miller-vasquez',
        appId: '1:394711558135:web:de1884371878fcd31070f2',
        databaseURL: 'https://ivannia-miller-vasquez-default-rtdb.firebaseio.com',
        storageBucket: 'ivannia-miller-vasquez.firebasestorage.app',
        apiKey: 'AIzaSyA0CfNvU0lUv4dJ7qYqF3Jgk-JtP48VfQU',
        authDomain: 'ivannia-miller-vasquez.firebaseapp.com',
        messagingSenderId: '394711558135',
        measurementId: 'G-PYN8DGHNKJ'
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
};
