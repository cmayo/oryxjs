import Container from './Container';
import AbstractDependencyProvider from './AbstractDependencyProvider';
import DependencyProviderNotInitializedException from './exception/DependencyProviderNotInitializedException';
import { AbstractConfig } from './index';
import GetConfigMixin from './mixin/GetConfigMixin';

abstract class BaseAbstractFactoryWithGetConfig<
  TAbstractConfig extends AbstractConfig,
> extends GetConfigMixin<TAbstractConfig> {}

export default abstract class AbstractFactory<
  TAbstractConfig extends AbstractConfig,
> extends BaseAbstractFactoryWithGetConfig<TAbstractConfig> {
  private static containers: { [index: string]: Container } = {};
  private dependencyProvider?: AbstractDependencyProvider;

  protected getProvidedDependency(key: string): any {
    return this.getContainer().get(key)();
  }

  private getContainer(): Container {
    const factoryClassName = this.constructor.name;

    if (!(factoryClassName in AbstractFactory.containers)) {
      AbstractFactory.containers[factoryClassName] =
        this.createContainerWithProvidedDependencies();
    }

    return AbstractFactory.containers[factoryClassName];
  }

  private createContainerWithProvidedDependencies(): Container {
    if (!this.dependencyProvider) {
      throw new DependencyProviderNotInitializedException();
    }

    const container = new Container();
    this.dependencyProvider.provideModuleDependencies(container);

    return container;
  }
}
