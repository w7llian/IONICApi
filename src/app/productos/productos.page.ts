import { Component, OnInit } from '@angular/core';4
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  nombre: string = "";
  productos: [];
  
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:4000/products')
    .subscribe(res => {
      console.log(res);
      this.productos = res;
    });
  }

  send(){
    let name = this.nombre;
    debugger;
  }

}
