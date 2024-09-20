import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {routes} from "./app.routes";
//import {authTokenInterceptor} from "./auth/auth.interceptor";
export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideHttpClient(/*withInterceptors([authTokenInterceptor])*/)
    ]
};