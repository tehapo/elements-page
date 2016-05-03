import {Component} from '@angular/core';
import {VaadinCharts, DataSeries} from '../../../bower_components/vaadin-charts/directives/vaadin-charts';

@Component({
  selector: 'my-areaspline-chart-basic-component',
  template: `
  <vaadin-areaspline-chart id="area-spline">
  <chart-title>Average fruit consumption during one week</chart-title>

  <legend layout="vertical" align="left" vertical-align="top" x="150" y="100" floating="true">
  </legend>

  <x-axis>
    <categories>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</categories>
    <plot-bands from="4.5" to="6.5" color="rgba(68, 170, 213, .2)">
    </plot-bands>
  </x-axis>
  <y-axis>
    <title>Fruit units</title>
  </y-axis>

  <tooltip shared="true" value-suffix="units">
  </tooltip>
  <plot-options>
    <areaspline fill-opacity="0.5">
    </areaspline>
  </plot-options>

  <data-series name="John">
    <data>3, 4, 3, 5, 4, 10, 12</data>
  </data-series>
  <data-series name="Jane">
    <data>1, 3, 4, 3, 3, 5, 4</data>
  </data-series>
</vaadin-areaspline-chart>
  `,
  directives: [VaadinCharts, DataSeries]
})

export class MyAreasplineChartBasicComponent {
}
