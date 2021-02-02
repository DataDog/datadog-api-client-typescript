import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import { messages } from "@cucumber/messages";
import { Polly } from "@pollyjs/core";
export class World {
  public document?: messages.IGherkinDocument;
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

  cleanup() {
    const undo = this.undo;
    undo.reverse();
    for (const clean of undo) {
      try {
        clean();
      } catch (error) {
        console.error(error);
      }
    }
    this.undo = [];
  }
}

setWorldConstructor(World);
setDefaultTimeout(15 * 1000);
