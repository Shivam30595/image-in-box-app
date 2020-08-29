import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  imageURLArray = []
  uploadImage(event, id){
    console.log("i am ahere", event);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event : any) => {
      for(let index = 0; index<=id ; index++) {
        if(!this.imageURLArray[index]) {
          this.imageURLArray[index] = event.target.result
         return;
        }
      }
      this.imageURLArray[id] = event.target.result
    }
  }

  deleteImage(id) {
    this.imageURLArray[id] = null;
    for(let index = 0; index<=5 ; index++) {
      if(!this.imageURLArray[index]) {
        if(this.imageURLArray[index+1]) {
          this.imageURLArray[index] = this.imageURLArray[index+1]
          this.imageURLArray[index+1] = null;
        } else {
          break;
        }
      }
    }
  }
}
