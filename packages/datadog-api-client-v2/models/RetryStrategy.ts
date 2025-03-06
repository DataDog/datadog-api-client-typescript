/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetryStrategyKind } from "./RetryStrategyKind";
import { RetryStrategyLinear } from "./RetryStrategyLinear";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetryStrategy.attributeTypeMap;
  }

  public constructor() {}
}
