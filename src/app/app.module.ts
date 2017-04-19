import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from "./+settings/settings.component";
import {SettingsModule} from "./+settings/settings.module";

const appRoutes: Routes = [
    {path: 'settings', component: SettingsComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        SettingsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}