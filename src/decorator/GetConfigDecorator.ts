import AbstractConfig from '../AbstractConfig';

function configCreator<T>(genericClass: {
  new (): AbstractConfig;
}): AbstractConfig {
  return new genericClass();
}

export default function (config: new () => AbstractConfig) {
  return function (target: new () => {}) {
    target.prototype.config = configCreator(config);
  };
}
