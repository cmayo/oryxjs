import AbstractFactory from './AbstractFactory';
import AbstractConfig from './AbstractConfig';
import AbstractFacade from './AbstractFacade';

function configCreator<T>(genericClass: {
  new (): AbstractConfig;
}): AbstractConfig {
  return new genericClass();
}

export function factoryCreator<T>(genericClass: {
  new (): AbstractFactory<AbstractConfig>;
}): AbstractFactory<AbstractConfig> {
  return new genericClass();
}

export function facadeCreator<T>(genericClass: {
  new (): AbstractFacade<AbstractFactory<AbstractConfig>>;
}): AbstractFacade<AbstractFactory<AbstractConfig>> {
  return new genericClass();
}
