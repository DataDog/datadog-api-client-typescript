/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `RetryStrategyLinear` object.
 */
export class RetryStrategyLinear {
  /**
   * The `RetryStrategyLinear` `interval`. The expected format is the number of seconds ending with an s. For example, 1 day is 86400s
   */
  "interval": string;
  /**
   * The `RetryStrategyLinear` `maxRetries`.
   */
  "maxRetries": number;

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
    interval: {
      baseName: "interval",
      type: "string",
      required: true,
    },
    maxRetries: {
      baseName: "maxRetries",
      type: "number",
      required: true,
      format: "double",
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
    return RetryStrategyLinear.attributeTypeMap;
  }

  public constructor() {}
}
