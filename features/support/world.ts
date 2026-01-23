import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import { Polly } from "@pollyjs/core";

const RECORD_MODE = process.env.RECORD || "false";
const SLEEP_AFTER_REQUEST = parseInt(process.env.SLEEP_AFTER_REQUEST || "0");

export class World {
  public polly?: Polly;

  public apiVersion = "";
  public authMethods: any = {};
  public unstableOperations: { [key: string]: boolean } = {};

  public apiName?: string;
  public apiInstance?: any;
  public operationId = "";
  public requestContext?: any;
  public method?: any;
  public response?: any;

  public undo: { (): void }[] = [];

  public fixtures: { [key: string]: any } = {};
  public opts: { [key: string]: any } = {};
  public pathParameters: { [key: string]: any } = {};

  async cleanup() {
    const undo = this.undo;
    undo.reverse();
    for (const clean of undo) {
      await clean();
    }
    this.undo = [];
  }

  async sleepAfterRequest() {
    if (RECORD_MODE === "false" || SLEEP_AFTER_REQUEST <= 0) {
      return Promise.resolve();
    }
    return new Promise(resolve => setTimeout(resolve, SLEEP_AFTER_REQUEST * 1000));
  }
}

setWorldConstructor(World);
setDefaultTimeout(60 * 1000);
