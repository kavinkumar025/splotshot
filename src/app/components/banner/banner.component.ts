import { Component } from '@angular/core';
import { DataBagService } from '../data-bag.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  constructor(public dataBag: DataBagService){
    
  }

}
