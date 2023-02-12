import AbstractConfig from '../AbstractConfig';
import ConfigNotInitializedException from '../exception/ConfigNotInitializedException';

export default abstract class<TConfig extends AbstractConfig> {
  private config?: TConfig;

  protected getConfig(): TConfig {
    if (!this.config) {
      throw new ConfigNotInitializedException();
    }

    return this.config;
  }
}
