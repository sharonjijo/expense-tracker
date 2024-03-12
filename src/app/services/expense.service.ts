import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  reloadRequired=new Subject()
  
  transactionSubject=new Subject()

  baseurl="http://127.0.0.1:8000/api/v1/transactions/"
  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get(this.baseurl)
  }
  addTransaction(data:any){
    return this.http.post(this.baseurl,data).pipe(tap(data=>this.reloadRequired.next(true)))
  }
  destroyTransaction(id:number){
    return this.http.delete(`${this.baseurl}${id}/`)
  }
  dispatchTransactionId(id:number){
    this.transactionSubject.next(id)

  }

}
