import Container from './Container';
import { AbstractFacade } from './index';
import AbstractFactory from './AbstractFactory';
import AbstractConfig from './AbstractConfig';
import { facadeCreator } from './ClassCreator';

export default class Locator {
  private static instance: Locator;
  private container: Container = new Container();

  public static getInstance(): Locator {
    if (!Locator.instance) {
      Locator.instance = new Locator();
    }

    return Locator.instance;
  }

  public loadModule(module: {
    new (): AbstractFacade<AbstractFactory<AbstractConfig>>;
  }): void {
    if (!this.container.has(module.name)) {
      this.container.set(module.name, () => facadeCreator(module));
    }
  }

  public get(
    module: new () => AbstractFacade<AbstractFactory<AbstractConfig>>,
  ): AbstractFacade<AbstractFactory<AbstractConfig>> {
    this.loadModule(module);
    return this.container.get(module.name)();
  }
}
