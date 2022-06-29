import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { ExcelPopUpComponent } from '../excel-pop-up/excel-pop-up.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  month = new FormControl('');
  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  year = new FormControl('');
  years = ['2022','2021','2020','2019','2018','2017'];

  threemonths = new FormControl('');
  sixmonths = new FormControl('');
  public dashboardEnabled: boolean = true;
  public offeringPortfolioEnabled: boolean = false;
  public isSelected: number = 1;

  showDashboard() {
    console.log('dashboard option clicked');
    this.dashboardEnabled = true;
    this.offeringPortfolioEnabled = false;
    this.isSelected = 1;
  }

  showOfferingPortfolio() {
    console.log('offering portfolio clicked');
    this.offeringPortfolioEnabled = true;
    this.dashboardEnabled = false;
    this.isSelected = 2;
  }

  onClick() {
    console.log('Clicked button');
  }

  displayTab(event: any) {
    if(event.index === 0) {
      return true;
    }
    else if(event.index === 1) {
      return false;
    }
    else {
      return false;
    }
  }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 91, 9 ],
        backgroundColor: 	['#2E7EA5', '#379E34', '#C5B70E'],
        hoverBackgroundColor: ['#2E7EA5', '#379E34', '#C5B70E']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  openExcelDialog(action: string): void {
    //const id = event._elementRef.nativeElement.id;
    const dialogRef = this.dialog.open(ExcelPopUpComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: action,
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        if (result == 'Submit') {
          this.onSubmit();
        }
        else if (result == 'Cancel') {
          //this.onReject();
        }
      }
    });
  }

  onSubmit() {
    console.log('Excel dialog clicked')
  }

}
