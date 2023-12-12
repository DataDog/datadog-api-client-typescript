/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing the aggregates.
 */
export class CostAttributionAggregatesBody {
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
  "_unparsed"?: boolean;

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
    return CostAttributionAggregatesBody.attributeTypeMap;
  }

  public constructor() {}
}