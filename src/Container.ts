import ContainerKeyNotFoundException from './exception/ContainerKeyNotFoundException';

export default class Container {
  private content: { [index: string]: any } = {};

  public get(key: string): any {
    if (!(key in this.content)) {
      throw new ContainerKeyNotFoundException();
    }

    return this.content[key];
  }

  public has(key: string): boolean {
    return key in this.content;
  }

  public set(key: string, value: any): void {
    this.content[key] = value;
  }
}
