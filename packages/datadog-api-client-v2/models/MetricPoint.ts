/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A point object is of the form `{POSIX_timestamp, numeric_value}`.
 */
export class MetricPoint {
  /**
   * The timestamp should be in seconds and current.
   * Current is defined as not more than 10 minutes in the future or more than 1 hour in the past.
   */
  "timestamp"?: number;
  /**
   * The numeric value format should be a 64bit float gauge-type value.
   */
  "value"?: number;

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
    timestamp: {
      baseName: "timestamp",
      type: "number",
      format: "int64",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "double",
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
    return MetricPoint.attributeTypeMap;
  }

  public constructor() {}
}
