import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import { Polly } from "@pollyjs/core";
export class World {
  public polly?: Polly;

  public apiVersion = "";
  public authMethods: any = {};

  public apiName?: string;
  public apiInstance?: any;
  public operationId = "";
  public requestContext?: any;
  public method?: any;
  public response?: any;

  public undo: { (): void }[] = [];

  public fixtures: { [key: string]: any } = {};
  public opts: { [key: string]: any } = {};

  cleanup(): void {
    const undo = this.undo;
    undo.reverse();
    for (const clean of undo) {
      clean();
    }
    this.undo = [];
  }
}

setWorldConstructor(World);
setDefaultTimeout(15 * 1000);
