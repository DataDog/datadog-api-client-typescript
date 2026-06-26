/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The query execution context used to visualize a limit and its usage.
 */
export class GovernanceLimitQueryConfig {
  /**
   * The chart type used to visualize the limit and its usage.
   */
  "chartType"?: string;
  /**
   * The time shift applied to compare current usage against a prior period.
   */
  "comparisonShift"?: string;
  /**
   * The default value used for the limit when no explicit value is configured.
   */
  "defaultValue"?: number;
  /**
   * The direction in which usage approaches the limit, indicating whether higher or lower values are closer to the limit.
   */
  "directionality"?: string;
  /**
   * The number of days of data the limit query evaluates over.
   */
  "effectiveTimeWindowDays"?: number;

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
    chartType: {
      baseName: "chart_type",
      type: "string",
    },
    comparisonShift: {
      baseName: "comparison_shift",
      type: "string",
    },
    defaultValue: {
      baseName: "default_value",
      type: "number",
      format: "int64",
    },
    directionality: {
      baseName: "directionality",
      type: "string",
    },
    effectiveTimeWindowDays: {
      baseName: "effective_time_window_days",
      type: "number",
      format: "int64",
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
    return GovernanceLimitQueryConfig.attributeTypeMap;
  }

  public constructor() {}
}
