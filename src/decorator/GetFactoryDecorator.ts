import AbstractFactory from '../AbstractFactory';
import AbstractConfig from '../AbstractConfig';

function factoryCreator<T>(genericClass: {
  new (): AbstractFactory<AbstractConfig>;
}): AbstractFactory<AbstractConfig> {
  return new genericClass();
}

export default function (factory: new () => AbstractFactory<AbstractConfig>) {
  return function (target: new () => {}) {
    target.prototype.factory = factoryCreator(factory);
  };
}
