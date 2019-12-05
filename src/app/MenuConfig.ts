export interface RouteItem {
  pathPattern: string
  menuLink: string
  component: any
  caption: string
}

export interface SubMenu {
  items: Array<RouteItem | SubMenu>
  caption: string
}

export class MenuConfig implements SubMenu {

  private static instance?: MenuConfig;

  static getInstance(): MenuConfig {
    if (!this.instance) this.instance = new MenuConfig();
    return this.instance;
  }

  private constructor() {
  }

  caption: string = '';
  items: Array<RouteItem | SubMenu> = [];

}
