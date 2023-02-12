import Container from './Container';
import Locator from './Locator';

export default abstract class AbstractDependencyProvider {
  protected getLocator(): Locator {
    return Locator.getInstance();
  }

  public provideModuleDependencies(container: Container): void {}
}
