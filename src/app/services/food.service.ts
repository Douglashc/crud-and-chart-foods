import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { FoodInterface } from 'src/app/interfaces/food.interface';

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    
    public foods: FoodInterface[] = [
        { name: 'Pique macho', country: 'Bolivia', city: 'Cochabamba' },
        { name: 'Saltania', country: 'Bolivia', city: 'Potosi' },
        { name: 'Ficase', country: 'Bolivia', city: 'La Paz' },
        { name: 'Majau', country: 'Bolivia', city: 'Santa Cruz' },
        { name: 'Chicharron', country: 'Bolivia', city: 'Cochabamba' },
        { name: 'Sajta', country: 'Bolivia', city: 'La Paz' },
        { name: 'Laping', country: 'Bolivia', city: 'Cochabamba' }
    ];
    
    constructor() {
        this.loadDataLocalStorage();
    }

    saveDataLocalStorage() : void {
        localStorage.setItem('dataFoods', JSON.stringify(this.foods));
    }

    loadDataLocalStorage(): void {
        if(!localStorage.getItem('dataFoods')) return;
        this.foods = JSON.parse(localStorage.getItem('dataFoods')!);
    }
    
    dataFood() : FoodInterface[] {
        this.saveDataLocalStorage();
        return this.foods;
    }

    groupByCity(): any[] {
        const groupedByCity = _.groupBy(this.foods, 'city');
        return Object.entries(groupedByCity).map(([city, foods]) => ({ city, count: foods.length }));
      }

    registerNewFood(food: FoodInterface) : void {
        this.foods.push(food);
        this.saveDataLocalStorage();
    }

    deleteFoodSelected(index: number) : void {
        this.foods.splice(index, 1);
        this.saveDataLocalStorage();
    }
}