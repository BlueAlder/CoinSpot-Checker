import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinspotApiService {

  constructor(private http: HttpClient) { }

  getBalances() {
    return this.http.get<Balances>(`${environment.base_api_url}/balances`);
  }
}

export interface Balances {
  status: string;

  // TODO make this not hardcoded

  balances: [
    {
    BTC: CoinBalance;
    },
    {
    DOGE: CoinBalance;
    }
  ];
}



export interface CoinBalance {
  balance: number;
  audbalance: number;
  rate: number;

}
