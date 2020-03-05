import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor() { }

  ngOnInit() {
    this.initChart()
    this.initChart1()
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);

    // Add data
    chart.data = [{
      "country": "Jan",
      "kerja": 35,
      "elaun": 42
    }, {
      "country": "Feb",
      "kerja": 17,
      "elaun": 31
    }, {
      "country": "Mac",
      "kerja": 28,
      "elaun": 29
    }, {
      "country": "Apr",
      "kerja": 26,
      "elaun": 23
    }, {
      "country": "Mei",
      "kerja": 14,
      "elaun": 21
    }, {
      "country": "Jun",
      "kerja": 26,
      "elaun": 49
    }, {
      "country": "Jul",
      "kerja": 64,
      "elaun": 72
    }, {
      "country": "Ogs",
      "kerja": 81,
      "elaun": 71
    }, {
      "country": "Sep",
      "kerja": 99,
      "elaun": 101
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "kerja";
    series.dataFields.categoryX = "country";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "elaun";
    series2.dataFields.categoryX = "country";
    series2.name = "Year 2018";
    series2.clustered = false;
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.ChordDiagram);
    chart.hiddenState.properties.opacity = 0;

    chart.data = [
      { from: "A", to: "D", value: 10 },
      { from: "B", to: "D", value: 8 },
      { from: "B", to: "E", value: 4 },
      { from: "B", to: "C", value: 2 },
      { from: "C", to: "E", value: 14 },
      { from: "E", to: "D", value: 8 },
      { from: "C", to: "A", value: 4 },
      { from: "G", to: "A", value: 7 },
      { from: "D", to: "B", value: 1 }
    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // make nodes draggable
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer
  }

}
