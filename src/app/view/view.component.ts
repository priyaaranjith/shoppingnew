import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private api : ApiService)
  {
    api.fetchProducts().subscribe(
      (response)=> {
        this.loading=false
        this.products = response;

      }
    )
  }


  products:any 

  loading : boolean =true


}
