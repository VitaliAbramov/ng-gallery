import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// bootstrap style
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';

// components
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageModalComponent } from './image-modal/image-modal.component';

// services
import { ImageService } from './shared/image.service';

// pipes
import { ImageFilterPipe } from './shared/filter.pipe';
import { ImageOrderPipe } from './shared/order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ImageModalComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageOrderPipe
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    ImageService,
    ImageFilterPipe,
    ImageOrderPipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [ImageModalComponent]
})
export class AppModule { }
