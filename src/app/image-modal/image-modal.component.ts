import { Component, OnInit } from '@angular/core';
// import { ImageService } from '../shared/image.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: [
    './image-modal.component.css'
  ]
})
export class ImageModalComponent implements OnInit{
  url = '';
  title = '';
  date = '';

  constructor(private imageService: ImageService, public bsModalRef: BsModalRef) {
  }  

  ngOnInit() {
  }

}
