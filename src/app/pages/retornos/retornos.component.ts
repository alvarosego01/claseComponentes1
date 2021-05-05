import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retornos',
  templateUrl: './retornos.component.html',
  styleUrls: ['./retornos.component.css']
})
export class RetornosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  recibe(respuesta){


    alert("La respuesta es " + respuesta);


  }

}
