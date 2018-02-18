import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ImageService{
  imagesUrl = 'http://localhost:3000/';
  visibleImages = [];
  images: any[] = [];

  constructor(private http: HttpClient){
    this.getImagesFromServer().subscribe(data => {
      this.images = data;
      this.visibleImages = this.images.sort((item1: any, item2: any) => {
        let a = (new Date(item1.date)).getTime();
        let b = (new Date(item2.date)).getTime();
        if (a > b) return -1;
        else if (a < b) return 1;
        else return 0;
      });
    });
  }

  getImages(){
    return this.images.slice(0);
  }


  getImagesFromServer() :any{
    return this.http.get(this.imagesUrl);
  }
}
