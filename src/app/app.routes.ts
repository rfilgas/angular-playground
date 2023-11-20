import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component.js";
import {HelloComponent} from "./hello/hello.component.js";
import {SettingsComponent} from "./settings/settings.component.js";
import {DashboardComponent} from "./dashboard/dashboard.component.js";
import {AboutComponent} from "./about/about.component.js";

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'hello', component: HelloComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutComponent },
];
