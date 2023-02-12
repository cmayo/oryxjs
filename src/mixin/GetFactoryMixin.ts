import AbstractFactory from '../AbstractFactory';
import FactoryNotInitializedException from '../exception/FactoryNotInitializedException';
import AbstractConfig from '../AbstractConfig';

export default abstract class<
  TFactory extends AbstractFactory<AbstractConfig>,
> {
  private factory?: TFactory;

  protected getFactory(): TFactory {
    if (!this.factory) {
      throw new FactoryNotInitializedException();
    }

    return this.factory;
  }
}
