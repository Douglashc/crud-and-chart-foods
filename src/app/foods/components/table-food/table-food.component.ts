import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FoodInterface } from 'src/app/interfaces/food.interface';

@Component({
    selector: 'foods-table-food',
    templateUrl: './table-food.component.html',
    styleUrls: []
})
export class TableFoodComponent implements OnInit{
    
    @Input()
    public foods: FoodInterface[] = [];

    @Output()
    public indexFood: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    ngOnInit(): void {
        
    }

    indexFoodDelete(index: number) : void {
        this.indexFood.emit(index);
    }
}