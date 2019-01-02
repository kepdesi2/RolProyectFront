import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MainComponent } from './main/main.component';
import { FichaComponent } from './ficha/ficha.component';

//Modulos
import { SharedModules } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

//rutas
import { PAGES_ROUTES } from './pages.routes';

//temporal
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { FichaHeadComponent } from '../components/ficha-head/ficha-head.component';

@NgModule({
    declarations: [
        PagesComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        MainComponent,
        FichaComponent,
        FichaHeadComponent
    ],
    exports:[
        PagesComponent,
    ],
    imports:[
        SharedModules,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModules {}