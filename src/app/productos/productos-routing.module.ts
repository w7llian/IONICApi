import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarPageModule } from '../sidebar/sidebar.module';

import { ProductosPage } from './productos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPageRoutingModule {}
