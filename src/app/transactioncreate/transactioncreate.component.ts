import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-transactioncreate',
  templateUrl: './transactioncreate.component.html',
  styleUrls: ['./transactioncreate.component.css']
})
export class TransactioncreateComponent {
  
  categories=['food','fuel','entertainment','bills','rent',"emi",'miscellaneous']

  transactionForm=new FormGroup({
    title:new FormControl("",Validators.required),
    type:new FormControl("",Validators.required),
    amount:new FormControl("",Validators.required),
    category:new FormControl("",Validators.required),
    user:new FormControl("",Validators.required)

  })
  constructor(private service:ExpenseService){
    this.service.transactionSubject.subscribe(id=>{
      console.log(id);
      
    })
      
  }
  
  createTransaction(){
    let data=this.transactionForm.value
    this.service.addTransaction(data).subscribe(data=>{
      console.log(data);
    
    })
  }
}
