import { AbstractFacade } from '../index';
import AbstractFactory from '../AbstractFactory';
import AbstractConfig from '../AbstractConfig';
import Locator from '../Locator';

export default function (
  facade: new () => AbstractFacade<AbstractFactory<AbstractConfig>>,
) {
  return function (target: new () => {}) {
    target.prototype.facade = Locator.getInstance().get(facade);
  };
}
