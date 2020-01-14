import { Component, OnInit, Input } from '@angular/core';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-busy-loader',
  templateUrl: 'busy-loader.component.html',
  styleUrls: ['./busy-loader.component.scss']
})
export class BusyLoaderComponent implements OnInit {

  @Input() isBusy = false;

  constructor() { }

  ngOnInit() { }

}
