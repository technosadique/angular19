import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent {

  doughnutChartLabels: Label[] = ['Bananas', 'Bloom', 'Craftshoes','Coral'];
  doughnutChartData: MultiDataSet = [
    [60, 20, 16, 4]
  ];
  
doughnutChartColors: Color[] = [
    { // dark blue        
      backgroundColor:'blue'      
    },
    { // red blue         
      backgroundColor:'red'      
    },  
  ];



  doughnutChartType: ChartType = 'doughnut';
  

}