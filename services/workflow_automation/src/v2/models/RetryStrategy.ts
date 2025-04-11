import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetryStrategyKind } from "./RetryStrategyKind";
import { RetryStrategyLinear } from "./RetryStrategyLinear";

/**
 * The definition of `RetryStrategy` object.
 */
export class RetryStrategy {
  /**
   * The definition of `RetryStrategyKind` object.
   */
  "kind": RetryStrategyKind;
  /**
   * The definition of `RetryStrategyLinear` object.
   */
  "linear"?: RetryStrategyLinear;
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
    kind: {
      baseName: "kind",
      type: "RetryStrategyKind",
      required: true,
    },
    linear: {
      baseName: "linear",
      type: "RetryStrategyLinear",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetryStrategy.attributeTypeMap;
  }

  public constructor() {}
}
