import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-retorno',
  templateUrl: './retorno.component.html',
  styleUrls: ['./retorno.component.css']
})
export class RetornoComponent implements OnInit {



  @Input("n1") n1: number = 0;
  @Input("n2") n2: number = 0;

  @Output() accionBoton  =  new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  respuesta(){

    let valor = this.n1 + this.n2;

    this.accionBoton.emit(valor);

  }


}
