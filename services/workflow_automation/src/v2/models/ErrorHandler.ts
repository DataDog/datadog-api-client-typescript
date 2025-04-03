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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
