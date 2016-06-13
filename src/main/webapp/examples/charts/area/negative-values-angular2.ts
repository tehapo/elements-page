import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-area-chart-negative-values-component',
  template: `
  <vaadin-area-chart id="area-with-negative-values">
    <chart-title>Area chart with negative values</chart-title>

    <x-axis>
      <categories>Apples, Oranges, Pears, Grapes, Bananas</categories>
    </x-axis>

    <tooltip enabled="true" shared="true">
    </tooltip>

    <data-series name="John">
      <data>5, 3, 4, 7, 2</data>
    </data-series>
    <data-series name="Jane">
      <data>2, -2, -3, 2, 1</data>
    </data-series>
    <data-series name="Joe">
      <data>3, 4, 4, -2, 5</data>
    </data-series>
  </vaadin-area-chart>
  `,
  directives: [ PolymerElement('vaadin-area-chart') ]
})

export class MyAreaChartNegativeValuesComponent {

}
