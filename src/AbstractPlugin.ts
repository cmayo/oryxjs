import { AbstractFactory } from './index';
import AbstractConfig from './AbstractConfig';
import GetFactoryMixin from './mixin/GetFactoryMixin';

abstract class BaseAbstractPluginWithGetFactory<
  TFactory extends AbstractFactory<AbstractConfig>,
> extends GetFactoryMixin<TFactory> {}

export default abstract class AbstractPlugin<
  TFactory extends AbstractFactory<AbstractConfig>,
> extends BaseAbstractPluginWithGetFactory<TFactory> {}
