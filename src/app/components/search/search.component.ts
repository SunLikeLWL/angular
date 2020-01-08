import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public searchText: '';
  public historyInfo: any[] = [];

  public str: [{ name: 'Tom' }]

  constructor() { }

  ngOnInit() {
  }
  bindSearch(e) {

    if (e.keyCode === 13) {

      if (this.searchText && this.historyInfo.indexOf(this.searchText) === -1) {
        this.historyInfo.push({
          text: this.searchText,
          check: false
        });
        console.log(this.historyInfo);
      }
      this.searchText = '';
    }
  }

  delete(index) {
    this.historyInfo.splice(index, 1);
    console.log(index)
  }

  readed(index) {
    this.historyInfo[index].check = 1;
  }

}
