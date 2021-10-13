import { Component, OnInit } from '@angular/core';
import { default as strategyData } from '../../assets/mocks/strategy.json'


@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  headers = [];
  finalData = { "type": [], 'price': [] }
  dataSource = strategyData.data;
  constructor() {
    this.dataSource.forEach((element) => {
      this.headers.unshift(element.period);
      this.finalData.type.push(element.strategies);
      if (this.finalData.price.some(el => Object.keys(el)[0] == element.strategies)) {
        this.finalData.price[this.finalData.price.length-1][element.strategies].unshift(element.price)
      }
      else{
        this.finalData.price.push({ [element.strategies]: [element.price] })
      }
    });
    this.headers = this.removeDublicate(this.headers)
    this.finalData.type = this.removeDublicate(this.finalData.type)
  }

  ngOnInit(): void {
  }
  removeDublicate(array) {
    return [...new Set(array)]
  }

}
