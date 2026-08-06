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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompletionGate.attributeTypeMap;
  }

  public constructor() {}
}
