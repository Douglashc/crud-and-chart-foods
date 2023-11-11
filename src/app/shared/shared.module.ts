import { NgModule } from '@angular/core';

import { ChartModule } from 'primeng/chart';

import { ChartComponent } from './components/chart/chart.component';

@NgModule({
    declarations: [
        ChartComponent
    ],
    imports: [
        ChartModule
    ],
    exports: [
        ChartComponent
    ]
})
export class SharedModule {

}