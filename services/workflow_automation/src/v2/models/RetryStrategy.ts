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
  "linear": RetryStrategyLinear;
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
      required: true,
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
