import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, NavComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'Estante Circular',
      image: './assets/images/estante.png',
      price: 100,
    },
    {
      id: '2',
      name: 'Frigobar Vintage',
      image: './assets/images/frigo.png',
      price: 100,
    },
    {
      id: '3',
      name: 'Estante Circular',
      image: './assets/images/estante.png',
      price: 100,
    },
    {
      id: '4',
      name: 'Frigobar Vintage',
      image: './assets/images/frigo.png',
      price: 100,
    },
    {
      id: '5',
      name: 'Estante Circular',
      image: './assets/images/estante.png',
      price: 100,
    },
    {
      id: '6',
      name: 'Frigobar Vintage',
      image: './assets/images/frigo.png',
      price: 100,
    },
    {
      id: '7',
      name: 'Estante Circular',
      image: './assets/images/estante.png',
      price: 100,
    },
    {
      id: '8',
      name: 'Frigobar Vintage',
      image: './assets/images/frigo.png',
      price: 100,
    },
    {
      id: '9',
      name: 'Estante Circular',
      image: './assets/images/estante.png',
      price: 100,
    },
    {
      id: '10',
      name: 'Frigobar Vintage',
      image: './assets/images/frigo.png',
      price: 100,
    },
  ]
}
