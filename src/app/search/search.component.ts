import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  

  name =""

  constructor(private api : ApiService){}
  searchProduct:any=[]

  readValues = ()=>{
    let data = {
      "name" : this.name
  }
  console.log(data)
  this.api.searchProducts(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("Invalid name")
        
      } else {
        this.searchProduct=response
        
      }
    }
  )
  }

}
