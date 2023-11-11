import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { FormFoodComponent } from './components/form-food/form-food.component';
import { TableFoodComponent } from './components/table-food/table-food.component';

@NgModule({
    declarations: [
        FormFoodComponent,
        TableFoodComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        TableModule
    ],
    exports: [
        FormFoodComponent,
        TableFoodComponent
    ]
})
export class FoodsModule {

}