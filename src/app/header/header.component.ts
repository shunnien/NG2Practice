import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: '.header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle = 'The Will Will Web!!';
  pageTitleLink = 'http://shunnien.github.io';

  @Input()
  pageSubTitle: string;

  num = 1;

  constructor() { }

  ngOnInit() {
  }

  plus(event: MouseEvent) {
    //console.log(event);
    this.num++;
    // if (event.ctrlKey) {
    //   this.num++;
    // }
  }
}
