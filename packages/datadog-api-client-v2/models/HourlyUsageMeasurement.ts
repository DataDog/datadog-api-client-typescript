/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Usage amount for a given usage type.
 */
export class HourlyUsageMeasurement {
  /**
   * Type of usage.
   */
  "usageType"?: string;
  /**
   * Contains the number measured for the given usage_type during the hour.
   */
  "value"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usageType: {
      baseName: "usage_type",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsageMeasurement.attributeTypeMap;
  }

  public constructor() {}
}
