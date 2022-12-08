import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  name = ""
  image = ""
  category = ""
  description = ""
  price = ""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
    this.api.addProducts(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("added successfully")
          
          this.name=""  
          this.image=""
          this.category=""
          this.description=""
          this.price=""
          
         
        }else{
          alert("Something went wrong")
        }
        }
    )
}

}
