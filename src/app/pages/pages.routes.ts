import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { MainComponent } from "./main/main.component";
import { FichaComponent } from "./ficha/ficha.component";



const pagesRoutes: Routes =[
    { 
        path:'',
        component: PagesComponent,
        children:[
            { path:'main',component: MainComponent },
            { path:'ficha',component: FichaComponent },
            { path:'account-settings',component: AccountSettingsComponent },
            { path:'', redirectTo: '/main', pathMatch: 'full' }
        ]
     }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);