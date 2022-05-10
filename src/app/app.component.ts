import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langFr: string;
  langEn: string;

  constructor(private translateService: TranslateService) {
    this.langEn = Constants.LANG_EN;
    this.langFr = Constants.LANG_FR;
  }

  /**
   * Switch language.
   *
   * @param lang - the language string
   */
  switchLang(lang: string): void {
    this.translateService.use(lang);
  }
}
