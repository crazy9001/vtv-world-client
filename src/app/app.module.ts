import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import {VideosComponent} from './videos/videos.component';
import {ManagersModule} from './managers/managers.module';
import {TokenInterceptor} from './auth/intercreptors/token.intercreptor';

@NgModule({
    declarations: [
        AppComponent,
        VideosComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        AuthModule,
        ManagersModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
