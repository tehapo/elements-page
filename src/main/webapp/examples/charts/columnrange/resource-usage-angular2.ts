import {Component} from '@angular/core';
import {VaadinCharts, DataSeries} from '../../../bower_components/vaadin-charts/directives/vaadin-charts';

@Component({
  selector: 'my-columnrange-chart-resource-usage-component',
  template: `
  <vaadin-columnrange-chart id="column-range-resource-usage">
    <chart inverted="true"></chart>
    <chart-title>Resource usage</chart-title>
    <x-axis>
      <categories>Printer, Coffee machine</categories>
    </x-axis>
    <y-axis type="datetime">
      <title>Time</title>
    </y-axis>
    <tooltip formatter="function () {return this.series.name +': '+ Highcharts.dateFormat('%H:%M', this.point.low) + ' - ' + Highcharts.dateFormat('%H:%M', this.point.high)}"></tooltip>
    <plot-options>
      <columnrange grouping="false">
        <data-labels enabled="true" inside="true" color="white" formatter="function () {return this.y == this.point.low ? '' : this.series.name;}"></data-labels>
      </columnrange>
    </plot-options>
    <data-series name="Team Alpha">
      <color>rgba(255, 60, 125, 0.8)</color>
      <data>
        [Date.UTC(2013,05,07,12,00,00),Date.UTC(2013,05,07,15,00,00)], [Date.UTC(2013,05,07,13,00,00),Date.UTC(2013,05,07,17,00,00)]
      </data>
    </data-series>
    <data-series name="Team Beta">
      <color>rgba(60, 125, 255, 0.8)</color>
      <data>
        [Date.UTC(2013,05,07,16,00,00),Date.UTC(2013,05,07,17,00,00)], [Date.UTC(2013,05,07,12,00,00),Date.UTC(2013,05,07,14,00,00)]
      </data>
    </data-series>
  </vaadin-columnrange-chart>
  `,
  directives: [VaadinCharts, DataSeries]
})

export class MyColumnrangeChartResourceUsageComponent {

}
