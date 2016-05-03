import {Component} from '@angular/core';
import {VaadinCharts, DataSeries} from '../../../bower_components/vaadin-charts/directives/vaadin-charts';

@Component({
  selector: 'my-solidgauge-chart-basic-component',
  template: `
  <vaadin-solidgauge-chart id="solid-gauge">
    <chart-title text></chart-title>
    <pane start-angle="-90" end-angle="90">
      <background background-color="#EEE" inner-radius="60%" outer-radius="100%" shape="arc"></background>
    </pane>
    <tooltip enabled="false"></tooltip>
    <y-axis min="0" max="200" line-width="0" minor-tick-width="0" tick-width="0">
      <stops>0.1, #55BF3B</stops>
      <stops>0.5, #DDDF0D</stops>
      <stops>0.9, #DF5353</stops>
      <title y="-100">Speed</title>
      <labels enabled="false"></labels>
    </y-axis>
    <plot-options>
      <solidgauge>
        <data-labels y="5" border-width="0"></data-labels>
      </solidgauge>
    </plot-options>
    <data-series name="Speed">
      <data>80</data>
    </data-series>
  </vaadin-solidgauge-chart>
  `,
  directives: [VaadinCharts, DataSeries]
})

export class MySolidgaugeChartBasicComponent {
}
