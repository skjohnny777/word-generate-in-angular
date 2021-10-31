import { Component } from '@angular/core';

import arrayWord from"../utils/words"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-ganerater';


  words=''
  limit=10;


   handleSlideChange(newLimit:number)
   {
    this.limit=newLimit;

   }

   generate()
   {
     this.words=arrayWord .slice(0,this.limit).join(' ')
   }



   
}
 