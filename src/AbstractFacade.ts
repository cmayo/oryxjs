import AbstractFactory from './AbstractFactory';
import GetFactoryMixin from './mixin/GetFactoryMixin';
import AbstractConfig from './AbstractConfig';

abstract class BaseAbstractFacadeWithGetFactory<
  TFactory extends AbstractFactory<AbstractConfig>,
> extends GetFactoryMixin<TFactory> {}

export default abstract class AbstractFacade<
  TFactory extends AbstractFactory<AbstractConfig>,
> extends BaseAbstractFacadeWithGetFactory<TFactory> {}
