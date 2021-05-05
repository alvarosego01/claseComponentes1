import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {


  @Input("img") img: string = null;
  @Input("texto") texto: string = null;


  constructor() { }

  ngOnInit(): void {
  }

}
