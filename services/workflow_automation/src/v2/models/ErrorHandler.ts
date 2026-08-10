import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetryStrategy } from "./RetryStrategy";

/**
 * Used to handle errors in an action.
 */
export class ErrorHandler {
  /**
   * The `ErrorHandler` `fallbackStepName`.
   */
  "fallbackStepName": string;
  /**
   * The definition of `RetryStrategy` object.
   */
  "retryStrategy": RetryStrategy;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fallbackStepName: {
      baseName: "fallbackStepName",
      type: "string",
      required: true,
    },
    retryStrategy: {
      baseName: "retryStrategy",
      type: "RetryStrategy",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ErrorHandler.attributeTypeMap;
  }

  public constructor() {}
}
