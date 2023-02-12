import AbstractConfig from './AbstractConfig';
import Container from './Container';

export default class Config extends AbstractConfig {
  public set(key: string, value: any): void {
    this.getContainer().set(key, value);
  }
}
