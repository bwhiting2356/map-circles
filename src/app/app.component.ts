import { Component } from '@angular/core';

import { Observable} from "rxjs/Observable";

import { of as ObservableOf } from "rxjs/observable/of";
import { map } from "rxjs/operators";

import { combineLatest } from "rxjs/observable/combineLatest";
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { withLatestFrom } from "rxjs/operator/withLatestFrom";
import { tap } from "rxjs/operators";

interface Job {
  desc: string;
  lat: number;
  lng: number;
  hightlighted?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hoverIndex = -1;
  jobs = ObservableOf([
    {
      desc: 'hi',
      lat: 40.694878,
      lng: -73.957329
    },
    {
      desc: 'how',
      lat: 40.689084,
      lng: -73.946772
    },
    {
      desc: 'are you?',
      lat: 40.692206,
      lng: -73.967457
    },
  ]);

  onMouseenter(i) {
    this.hoverIndex = i;
  }

  onMouseleave() {
    this.hoverIndex = -1
  }
}
