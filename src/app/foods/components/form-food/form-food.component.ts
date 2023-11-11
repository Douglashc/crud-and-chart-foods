import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FoodInterface } from 'src/app/interfaces/food.interface';

@Component({
    selector: 'foods-form-food',
    templateUrl: './form-food.component.html',
    styleUrls: []
})
export class FormFoodComponent implements OnInit {

    @Input()
    public foods: FoodInterface[] = [];

    @Output()
    public foodEmitter: EventEmitter<FoodInterface> = new EventEmitter<FoodInterface>();

    public food: FoodInterface = {};

    constructor() { }

    ngOnInit(): void {

    }

    onRegisterFood(): void {

        this.foodEmitter.emit(this.food);
        this.food = { name: '', country: '', city: '' };
    }
}