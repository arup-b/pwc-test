import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PWC-Test';
  products: any = [];
  hideFixedCard = true;
  sidecardImg: string;

  constructor(private data: DataService) {
    //
  }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<any> {
    // get list of products asynchronously
    this.products = (await this.data.getProducts()).list;
    // console.log('list arr.. ', this.products);
  }

  handleMouseOver(item: string): void {
    // update image on mouse over - as required
    this.sidecardImg = 'assets/products' + item + '.jpg';
    this.hideFixedCard = false;
  }

  handleMouseOut(): void {
    // we can attach some functionality on mouse out if required
    // closing the card on mouse out not suggested as it has a Shop Button
  }

  closecard(): void {
    //  'Shop Button' functionality not added
    this.sidecardImg = '';
    this.hideFixedCard = true;
  }


}

