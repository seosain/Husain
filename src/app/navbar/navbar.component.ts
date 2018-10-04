import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nav = 'navbar';
  home = 'home';
  master = 'master data';

  
  constructor() { }

  ngOnInit() {
  }

}
