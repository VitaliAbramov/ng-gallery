import { Component, OnChanges, Input, TemplateRef } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ImageModalComponent } from '../image-modal/image-modal.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [
    './gallery.component.css'
  ]
})
export class GalleryComponent implements OnChanges{
  modalRef: BsModalRef;

  visibleAmount = 10;
  start = 0;
  notAtEnd = true;
  totalAmount = 0

  isDateSortAsc = false;
  isTitleSortAsc = true;
  isOrderByTitle = false;

  @Input() filterByValue?: string = '';

  visibleImages: any[] = [];

  @Input() orderByValue: any = {
    'name': 'date',
    'desc': true
  }

  constructor(private imageService: ImageService, private modalService: BsModalService) {
    this.totalAmount = this.imageService.getImages().length;
    this.setVisibleImages(this.visibleAmount);
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

  onKey(event) {
    this.filterByValue = event.target.value;
  }

  orderByDate() {
    this.isOrderByTitle = false;
    this.orderByValue = {
      name:'date',
      desc: this.isDateSortAsc
    };

    this.isDateSortAsc = this.isDateSortAsc? false: true;
  }

  orderByTitle() {
    this.isOrderByTitle = true;
    this.orderByValue = {
      name:'title',
      desc: this.isTitleSortAsc
    };

    this.isTitleSortAsc = this.isTitleSortAsc? false: true;
  }


  setVisibleImages(amount: number) {
    console.log('start:', this.start);
    console.log('amount:', amount);
    this.visibleAmount = amount;
    this.visibleImages = this.imageService.getImages().splice(this.start, amount);
    this.start += amount;
  }

  next(){
    this.setVisibleImages(this.visibleAmount);
    if(this.start > this.totalAmount){
      this.notAtEnd = false;
      this.start = this.totalAmount;
    }

  }
  prev(){
    this.notAtEnd = true;
    this.start -= this.visibleAmount*2;
    if(this.start <= this.visibleAmount) {
      this.start = 0;
    }
    this.setVisibleImages(this.visibleAmount);
  }

  reset(amount: number){
    this.visibleAmount = amount;
    if (!amount) {
      amount = this.totalAmount;
    }
    this.start = 0;
    this.setVisibleImages(amount);
    this.notAtEnd = true;
  }

  openModal(initialState, index) {    
    this.modalRef = this.modalService.show(ImageModalComponent, {initialState});
  }
}
