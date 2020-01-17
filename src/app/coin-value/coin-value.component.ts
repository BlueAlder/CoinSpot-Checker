import { Component, OnInit } from '@angular/core';
import {CoinspotApiService} from '../services/coinspot-api.service';

@Component({
  selector: 'app-coin-value',
  templateUrl: './coin-value.component.html',
  styleUrls: ['./coin-value.component.scss']
})
export class CoinValueComponent implements OnInit {

  bitcoinaud: number;
  loading = false;

  constructor(private coinspotApiService: CoinspotApiService) { }

  ngOnInit() {
    this.loading = true;
    this.coinspotApiService.getBalances()
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        return this.bitcoinaud = res.balances[0].BTC.audbalance;
      });
  }

}
