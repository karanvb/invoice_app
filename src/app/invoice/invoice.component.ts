import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Party } from '../model/partyModel';
import { Product } from '../model/productModel';
import { Invoice } from '../model/invoiceModel';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  _partyurl = "http://localhost:8080/api/party/";
  _producturl = "http://localhost:8080/api/products/";



  // public dropdownItems: Array<string> = [];
  //partyData: Party[];
  partyData = new Party;
  productData = new Product;
  //productData: Product[];
  invoiceData: Invoice[];
  dataShow: Party;
  dataProduct: Product;
  partyName: String;
  partyType: String;
  phone: String;
  city: String;
  state: String;
  postal: string;
  quantity: number;
  productName: string;
  productType: string;
  sales: number;
  purchase: number;
  hsn: string;
  gst: number;
  total: number;


  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._partyurl).subscribe((data: Party) => this.partyData = data);
    this.httpClient.get(this._producturl).subscribe((data: Product) => this.productData = data);
  }

  onChange(value) {
    for (let i = 0; i < 10; i++) {
      if (this.partyData[i].id == value) {
        try {
          this.dataShow = this.partyData[i];
        } catch (error) {
          console.log(error);
        }
        break;
      }
    } this.setValue();
  }

  setValue() {
    this.partyName = this.dataShow.partyName;
    this.partyType = this.dataShow.partyType;
    this.phone = this.dataShow.phoneNumber;
    this.city = this.dataShow.city;
    this.state = this.dataShow.state;
    this.postal = this.dataShow.postalCode;

  }

  onPChange(value) {
    for (let i = 0; i < 10; i++) {
      if (this.productData[i].id == value) {

        this.dataProduct = this.productData[i];
      }
    }
    this.productName = this.dataProduct.itemName;
    this.productType = this.dataProduct.itemType;
    this.sales = this.dataProduct.salesPrice;
    this.purchase = this.dataProduct.purchasePrice;
    this.hsn = this.dataProduct.hsn;
    this.gst = this.dataProduct.gst;
  }

  onNChange(value) {
    this.quantity = value;
    this.totalPrice();
  }

  totalPrice() {
    let value = this.quantity * this.sales * this.gst;
    this.total = (this.quantity * this.sales) + value;
  }

  onSave() {
    this.invoiceData
  }

  ngOnInit(): void {

    // TODO: implement this using service 
    // this.service.getDropdownValues.subscribe(data=>{
    //   data.array.forEach(element => {
    //     this.dropdownItems.push(element[""])
    //   });
    // })
    // this.partyData.forEach(element => {
    //   this.dropdownItems.push(element["name"])
    // })

  }

}
