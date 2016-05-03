import {Component} from '@angular/core';
import {VaadinCharts, DataSeries} from '../../../bower_components/vaadin-charts/directives/vaadin-charts';

@Component({
  selector: 'my-pie-chart-basic-component',
  template: `
  <vaadin-pie-chart id="pie-with-legend">
  <chart-title>Browser market shares at a specific website, 2014</chart-title>
  <tooltip value-decimals="1" point-format="{series.name}: <b>{point.percentage:.1f}%</b>">
  </tooltip>
  <plot-options>
    <pie allow-point-select="true" show-in-legend="true" cursor="pointer">
      <data-labels enabled="true" format="<b>{point.name}</b>:    {point.percentage} %">
      </data-labels>
    </pie>
  </plot-options>

  <data-series name="Browser share">
    <data>
      ["Firefox", 45.0], ["IE", 26.8], ["Chrome", 12.8], ["Safari", 8.5], ["Opera", 6.2], ["Others", 0.7],
    </data>
  </data-series>
</vaadin-pie-chart>
  `,
  directives: [VaadinCharts, DataSeries]
})

export class MyPieChartBasicComponent {
}
