import AbstractFactory from '../AbstractFactory';
import AbstractConfig from '../AbstractConfig';
import AbstractFacade from '../AbstractFacade';
import FacadeNotInitializedException from '../exception/FacadeNotInitializedException';

export default abstract class<
  TFacade extends AbstractFacade<AbstractFactory<AbstractConfig>>,
> {
  private facade?: TFacade;

  protected getFacade(): TFacade {
    if (!this.facade) {
      throw new FacadeNotInitializedException();
    }

    return this.facade;
  }
}
