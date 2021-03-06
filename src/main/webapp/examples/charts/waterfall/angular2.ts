import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-waterfall-chart-basic-component',
  template: `
  <vaadin-waterfall-chart id="waterfall">
  <chart-title>Vaadin Charts Waterfall</chart-title>
  <x-axis type="category"></x-axis>
  <y-axis>
    <title>USD</title>
  </y-axis>
  <legend enabled="false"></legend>
  <tooltip point-format="<b>{point.y:.2f}</b> USD"></tooltip>
  <plot-options>
    <series>
      <data-labels enabled="true" y="-30" vertical-align="top" formatter="function () { return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';}">
      </data-labels>
    </series>
  </plot-options>
  <data-series>
    <up-color>#EC6464</up-color>
    <color>#98DF58</color>
    <data>
      <point>
        <name>Start</name>
        <y>120000</y>
      </point>
      <point>
        <name>Product Revenue</name>
        <y>569000</y>
      </point>
      <point>
        <name>Service Revenue</name>
        <y>231000</y>
      </point>
      <point>
        <name>Positive Balance</name>
        <is-intermediate-sum>true</is-intermediate-sum>
        <color>#3090F0</color>
      </point>
      <point>
        <name>Fixed Costs</name>
        <y>-342000</y>
      </point>
      <point>
        <name>Variable Costs</name>
        <y>-233000</y>
      </point>
      <point>
        <name>Balance</name>
        <is-sum>true</is-sum>
        <color>#3090F0</color>
      </point>
    </data>
  </data-series>
</vaadin-waterfall-chart>
  `,
  directives: [ PolymerElement('vaadin-waterfall-chart') ]
})

export class MyWaterfallChartBasicComponent {
}
