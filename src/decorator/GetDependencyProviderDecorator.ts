import AbstractDependencyProvider from '../AbstractDependencyProvider';

function factoryCreator<T>(genericClass: {
  new (): AbstractDependencyProvider;
}): AbstractDependencyProvider {
  return new genericClass();
}

export default function (
  dependencyProvider: new () => AbstractDependencyProvider,
) {
  return function (target: new () => {}) {
    target.prototype.dependencyProvider = factoryCreator(dependencyProvider);
  };
}
