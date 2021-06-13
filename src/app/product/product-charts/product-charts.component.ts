import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartSize, ChartType } from 'chart.js';
import { Label } from 'ng2-charts'
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-charts',
  templateUrl: './product-charts.component.html',
  styleUrls: ['./product-charts.component.css']
})
export class ProductChartsComponent implements OnInit {

  isChartReady:boolean = false;

  productVisit:number[] = []

  constructor(private _productService:ProductsService, private _route:Router) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() 
  {
    this._productService.getData().subscribe(
      (data:Product[]) => {
        data.forEach( (element) => {
          this.barChartLabels.push(element.productName)
          this.productVisit.push(element.visit)
        })
      }
    )
  }

  goBack() {
    this._route.navigate(['./productSummary'])
  }


  public barChartOptions: ChartOptions = {
    responsive: true,
    
    maintainAspectRatio: true,
    defaultColor:'red'
  };

  public chartSize: ChartSize = {
    width:1,
    height:1
  }
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  

  public barChartData: ChartDataSets[] = [
    { data: this.productVisit, label:'Visits' }
  ];
  
}
