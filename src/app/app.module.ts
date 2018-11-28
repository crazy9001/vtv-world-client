import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import {VideosComponent} from './videos/videos.component';
import {ManagersModule} from './managers/managers.module';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
