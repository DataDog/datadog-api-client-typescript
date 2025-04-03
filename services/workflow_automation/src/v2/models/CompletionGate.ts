import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompletionCondition } from "./CompletionCondition";
import { RetryStrategy } from "./RetryStrategy";

/**
 * Used to create conditions before running subsequent actions.
 */
export class CompletionGate {
  /**
   * The definition of `CompletionCondition` object.
   */
  "completionCondition": CompletionCondition;
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
    completionCondition: {
      baseName: "completionCondition",
      type: "CompletionCondition",
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
    return CompletionGate.attributeTypeMap;
  }

  public constructor() {}
}
