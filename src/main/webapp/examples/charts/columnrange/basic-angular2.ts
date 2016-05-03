import {Component} from '@angular/core';
import {VaadinCharts, DataSeries} from '../../../bower_components/vaadin-charts/directives/vaadin-charts';

@Component({
  selector: 'my-columnrange-chart-basic-component',
  template: `
  <vaadin-columnrange-chart id="column-range">
  <chart inverted="true"></chart>
  <chart-title>Temperature variation by month</chart-title>
  <subtitle>Observed in Vik i Sogn, Norway</subtitle>
  <x-axis>
    <categories>Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</categories>
  </x-axis>
  <y-axis>
    <title>Temperature ( C )</title>
  </y-axis>
  <tooltip value-suffix="C"></tooltip>
  <plot-options>
    <columnrange>
      <data-labels enabled="true" formatter="function () {return this.y + 'C';}"></data-labels>
    </columnrange>
  </plot-options>
  <legend enabled="false"></legend>
  <data-series name="Temperatures">
    <data>
      [-9.7, 9.4], [-8.7, 6.5], [-3.5, 9.4], [-1.4, 19.9], [0.0, 22.6], [2.9, 29.5], [9.2, 30.7], [7.3, 26.5], [4.4, 18.0], [-3.1, 11.4], [-5.2, 10.4], [-13.5, 9.8]
    </data>
  </data-series>
</vaadin-columnrange-chart>
  `,
  directives: [VaadinCharts, DataSeries]
})

export class MyColumnrangeChartBasicComponent {

}
