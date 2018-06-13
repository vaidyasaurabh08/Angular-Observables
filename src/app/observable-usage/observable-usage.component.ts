import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-observable-usage',
  templateUrl: './observable-usage.component.html',
  styleUrls: ['./observable-usage.component.css']
})
export class ObservableUsageComponent implements OnInit {

  constructor() {}

  @ViewChild('button') button: ElementRef;
  @ViewChild('button2') button2: ElementRef;
  txtValue: MouseEvent = null;

  ngOnInit() {
    const buttonClickStream = Observable.fromEvent(this.button.nativeElement, 'click')
                            .subscribe({
                              next: (val: any) => {
                                this.txtValue = val.clientX;
                                console.log(val);
                                },
                              error: (err) => {console.log(err);}
                            });

  }

}
