import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Link } from 'src/models/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'razas';

  // Configuración de los enlaces del menú
  public links: Link[] = [
    {label: 'home', href: 'home'},
    {label: 'breed', href: 'breed'}
  ]

  constructor(translate: TranslateService) {    
    translate.setDefaultLang('en');

    translate.use('en');
  }
}
