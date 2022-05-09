/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * The object containing the aggregates.
 */
export class UsageAttributionAggregatesBody {
  /**
   * The aggregate type.
   */
  "aggType"?: string;
  /**
   * The field.
   */
  "field"?: string;
  /**
   * The value for a given field.
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
    aggType: {
      baseName: "agg_type",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAttributionAggregatesBody.attributeTypeMap;
  }

  public constructor() {}
}
