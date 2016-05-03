import {Component} from '@angular/core';
import {VaadinCharts, DataSeries} from '../../../bower_components/vaadin-charts/directives/vaadin-charts';

@Component({
  selector: 'my-treemap-chart-basic-component',
  template: `
  <vaadin-treemap-chart id="treemap-with-color-axis">
    <title>Vaadin Charts Treemap</title>
    <color-axis min-color="#FFFFFF" max-color="#7BB5EF"></color-axis>
    <data-series>
      <layout-algorithm>squarified</layout-algorithm>
      <data>
        <point>
          <name>A</name>
          <value>6</value>
          <color-value>1</color-value>
        </point>
        <point>
          <name>B</name>
          <value>6</value>
          <color-value>2</color-value>
        </point>
        <point>
          <name>C</name>
          <value>4</value>
          <color-value>3</color-value>
        </point>
        <point>
          <name>D</name>
          <value>3</value>
          <color-value>4</color-value>
        </point>
        <point>
          <name>E</name>
          <value>2</value>
          <color-value>5</color-value>
        </point>
        <point>
          <name>F</name>
          <value>2</value>
          <color-value>6</color-value>
        </point>
        <point>
          <name>G</name>
          <value>1</value>
          <color-value>7</color-value>
        </point>
      </data>
    </data-series>
  </vaadin-treemap-chart>
  `,
  directives: [VaadinCharts, DataSeries]
})

export class MyTreemapChartBasicComponent {
}