import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }
}
