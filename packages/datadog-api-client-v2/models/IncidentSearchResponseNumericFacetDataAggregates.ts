/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregate information for numeric incident data.
 */
export class IncidentSearchResponseNumericFacetDataAggregates {
  /**
   * Maximum value of the numeric aggregates.
   */
  "max"?: number;
  /**
   * Minimum value of the numeric aggregates.
   */
  "min"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentSearchResponseNumericFacetDataAggregates.attributeTypeMap;
  }

  public constructor() {}
}
