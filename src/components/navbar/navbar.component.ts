import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/models/link';

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() links: Link[];

  constructor() { }

  ngOnInit() {
  }

}
