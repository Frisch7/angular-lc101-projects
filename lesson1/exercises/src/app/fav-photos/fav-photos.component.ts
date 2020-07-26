import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.aafsfl.org/uploads/5/7/8/0/5780701/s324222675859668953_p18_i1_w1280.jpeg';
  image2 = 'https://scalebranding.com/wp-content/uploads/2020/07/three-peak-mountain-01.png';
  image3 = 'https://api.time.com/wp-content/uploads/2019/09/american-flag-wind.jpg?quality=85&w=1200&h=628&crop=1';

  constructor() { }

  ngOnInit() {
  }

}