import Container from './Container';
import ConfigNotInitializedException from './exception/ConfigNotInitializedException';

export default abstract class AbstractConfig {
  protected static container: Container = new Container();

  protected getContainer(): Container {
    return AbstractConfig.container;
  }

  public get(key: string): any {
    if (!AbstractConfig.container) {
      throw new ConfigNotInitializedException();
    }

    return AbstractConfig.container.get(key);
  }
}
