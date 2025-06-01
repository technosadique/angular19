// line-chart.component.ts
import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    /*
    { data: [70, 90, 80, 75], label: 'Users'},
    { data: [40, 30, 50, 10], label: 'Messages'},
    { data: [10,60,30,20], label: 'Downloads  '},

    */
   { data: [55, 65, 80, 75], label: 'Users'},
    { data: [40, 30, 50, 10], label: 'Messages'},
    { data: [10,60,30,20], label: 'Downloads  '},

  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['Feb', 'Mar', 'Apr', 'May'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark blue  
      
      borderColor: 'blue',
      hoverBackgroundColor:'blue',
      backgroundColor:'#FFF'
    },
    { // red
      
      borderColor: 'red',
      hoverBackgroundColor:'red',
      backgroundColor:'#FFF'
    },
    { // green
      
      borderColor: '#00FF7F',
      hoverBackgroundColor:'#00FF7F',
      backgroundColor:'#FFF'
    }
  ];

  // Set true to show legends
  lineChartLegend = false;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
