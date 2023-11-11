import { Component, OnInit, Input } from '@angular/core';
import { FoodInterface } from 'src/app/interfaces/food.interface';

@Component({
    selector: 'shared-chart',
    templateUrl: './chart.component.html',
    styleUrls: []
})
export class ChartComponent implements OnInit{
    
    @Input()
    public typeChart: string = ''
    
    @Input()
    public data: any;
    
    constructor() {}

    ngOnInit(): void {
        
    }
}