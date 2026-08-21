/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionGridCohortType } from "./ProductAnalyticsRetentionGridCohortType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One cell of the retention grid, holding the result for a single cohort over a single return period.
 * Aggregated rows omit the time and count fields.
 */
export class ProductAnalyticsRetentionGridCohortCell {
  /**
   * Number of entities that returned during the period.
   */
  "cellCount"?: number;
  /**
   * Fraction of the cohort that returned, between `0` and `1`.
   */
  "cellRate"?: number;
  /**
   * Change in the metric relative to the cohort baseline.
   */
  "cellRelativeValueChange"?: number;
  /**
   * Value of the computed metric, when a metric other than the retention rate is requested.
   */
  "cellValue"?: number;
  /**
   * Whether the return period is still open, so the numbers are not yet final.
   */
  "isPartialData"?: boolean;
  /**
   * End of the return period, in epoch milliseconds.
   */
  "returnPeriodEndTime"?: number;
  /**
   * Zero-based index of the return period this cell belongs to.
   */
  "returnPeriodIndex"?: number;
  /**
   * Start of the return period, in epoch milliseconds.
   */
  "returnPeriodStartTime"?: number;
  /**
   * Whether the row holds one cohort's own numbers, or the weighted roll-up across every cohort.
   */
  "type"?: ProductAnalyticsRetentionGridCohortType;

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
    cellCount: {
      baseName: "cell_count",
      type: "number",
      format: "int64",
    },
    cellRate: {
      baseName: "cell_rate",
      type: "number",
      format: "double",
    },
    cellRelativeValueChange: {
      baseName: "cell_relative_value_change",
      type: "number",
      format: "double",
    },
    cellValue: {
      baseName: "cell_value",
      type: "number",
      format: "double",
    },
    isPartialData: {
      baseName: "is_partial_data",
      type: "boolean",
    },
    returnPeriodEndTime: {
      baseName: "return_period_end_time",
      type: "number",
      format: "int64",
    },
    returnPeriodIndex: {
      baseName: "return_period_index",
      type: "number",
      format: "int64",
    },
    returnPeriodStartTime: {
      baseName: "return_period_start_time",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionGridCohortType",
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
    return ProductAnalyticsRetentionGridCohortCell.attributeTypeMap;
  }

  public constructor() {}
}
