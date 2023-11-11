import { Component, OnInit } from '@angular/core';
import { FoodInterface } from 'src/app/interfaces/food.interface';

import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public foods: FoodInterface[] = [];

  public groupedByCity: FoodInterface[] = [];

  public data: any;

  constructor(private foodService: FoodService) {
    this.data = {
      labels: [],
      datasets: [
        {
          label: 'Cantidad de comidas',
          data: []
        }
      ]
    }
  }

  ngOnInit(): void {
    this.getFoods();
    this.groupItemsFoodChart();
  }

  groupItemsFoodChart(): void {

    this.groupedByCity = this.foodService.groupByCity();

    this.updateChartData();
  }

  updateChartData(): void {
    
    this.data = {
      labels: this.groupedByCity.map(item => item.city),
      datasets: [
        {
          label: 'Cantidad de comidas',
          data: this.groupedByCity.map(item => item.count)
        }
      ]
    };
  }

  getFoods(): void {
    this.foods = this.foodService.dataFood();
  }

  registerFood(food: FoodInterface) : void {
    this.foodService.registerNewFood(food);

    this.groupItemsFoodChart();
  }
  
  deleteFood(indexFood: number) : void {
    this.foodService.deleteFoodSelected(indexFood);

    this.groupItemsFoodChart();
  }
}
