import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }
  favLinks : string[] = ['www.google.com', 'www.launchcode.com'];
  ngOnInit() {
  }

}
