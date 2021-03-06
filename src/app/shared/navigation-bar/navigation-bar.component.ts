import * as ng from 'angular';

import { IAppConstantsService, IAppLanguageService, IUtilitiesService } from '../../app.module';

import template from './navigation-bar.component.html';
import './navigation-bar.component.scss';

export class NavigationBarController {
  public static $inject = ['$window', '$state', 'AppConstantsService', 'AppLanguageService', 'UtilitiesService'];
  public name: string;
  public currentNavItem!: string;
  public selectedLanguage!: string;
  public supportedLanguages!: string[];

  constructor(protected window: ng.IWindowService,
              protected state: ng.ui.IStateService,
              protected appConstantsService: IAppConstantsService,
              protected appLanguageService: IAppLanguageService,
              protected utilitiesService: IUtilitiesService) {
    this.name = 'NavigationBarComponent';
  }

  get canOpenJsonServer(): boolean {
    return this.appConstantsService.Application.SHOW_JSON_SERVER_API === true;
  }

  public $onInit(): void {
    if (this.utilitiesService.getCurrentPath() === '/todo-list') {
      this.currentNavItem = 'todos';
    }
    else {
      this.currentNavItem = 'contacts';
    }

    this.supportedLanguages = this.appLanguageService.getSupportedLanguagesList();
    this.selectedLanguage = this.appLanguageService.getLanguageId();
  }

  public $onDestroy(): void {
    // do nothing
  }

  public goToTodoList(): void {
    this.state.go('todo-list');
  }

  public goToContactList(): void {
    this.state.go('contact-list');
  }

  public selectLanguage(language: string): void {
    if (this.appLanguageService.getLanguageId() !== language) {
      this.selectedLanguage = language;
      this.appLanguageService.setLanguageId(this.selectedLanguage);
    }
  }

  public openJsonServer(): void {
    this.window.open(this.appConstantsService.Application.JSON_SERVER_API_URL);
  }
}

export const NavigationBarComponent: ng.IComponentOptions = {
  bindings: {},
  controller: NavigationBarController,
  template: () => {
    return template;
  },
};
