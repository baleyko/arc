export class Component {
  get selector() {
    // camel to kebab
    return this.constructor.name
      .replace(/\.?([A-Z])/g, (_, name) => `-${name.toLowerCase()}`)
      .replace(/^-/, '');
  }
  constructor() {
    const { selector = null } = this;
    const { template = null } = this;

    return ng.core.Component({
      selector,
      template,
    })(class {});
  }
}

export class Module {
  constructor() {
    const { declarations = [] } = this;
    const { bootstrap = [] } = this;

    return ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule],
      declarations,
      bootstrap,
    })(class {});
  }
}
