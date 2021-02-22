import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PartyPageComponent } from './party-page/party-page.component';
import { PartyViewComponent } from './party-view/party-view.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  { path: 'product', component: ProductPageComponent },
  { path: 'productView', component: ProductViewComponent },
  { path: 'party', component: PartyPageComponent },
  { path: 'partyView', component: PartyViewComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
