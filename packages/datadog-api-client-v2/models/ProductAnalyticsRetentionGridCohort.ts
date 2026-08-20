/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionGridCohortCell } from "./ProductAnalyticsRetentionGridCohortCell";
import { ProductAnalyticsRetentionGridCohortType } from "./ProductAnalyticsRetentionGridCohortType";
import { ProductAnalyticsUnit } from "./ProductAnalyticsUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One row of the retention grid, holding the results for a single cohort.
 */
export class ProductAnalyticsRetentionGridCohort {
  /**
   * The cells of the row, one per return period.
   */
  "cells"?: Array<ProductAnalyticsRetentionGridCohortCell>;
  /**
   * End of the cohort window, in epoch milliseconds.
   */
  "cohortEndTime"?: number;
  /**
   * Zero-based index of the cohort in the grid.
   */
  "cohortIndex"?: number;
  /**
   * Number of entities in the cohort.
   */
  "cohortSize"?: number;
  /**
   * Start of the cohort window, in epoch milliseconds.
   */
  "cohortStartTime"?: number;
  /**
   * The group-by facet values that identify this row.
   */
  "groupTags"?: Array<string>;
  /**
   * Label identifying the cohort, such as the week it started.
   */
  "name"?: string;
  /**
   * Whether the row holds one cohort's own numbers, or the weighted roll-up across every cohort.
   */
  "type"?: ProductAnalyticsRetentionGridCohortType;
  /**
   * Unit definitions for the cell values.
   */
  "unit"?: Array<ProductAnalyticsUnit>;

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
    cells: {
      baseName: "cells",
      type: "Array<ProductAnalyticsRetentionGridCohortCell>",
    },
    cohortEndTime: {
      baseName: "cohort_end_time",
      type: "number",
      format: "int64",
    },
    cohortIndex: {
      baseName: "cohort_index",
      type: "number",
      format: "int64",
    },
    cohortSize: {
      baseName: "cohort_size",
      type: "number",
      format: "int64",
    },
    cohortStartTime: {
      baseName: "cohort_start_time",
      type: "number",
      format: "int64",
    },
    groupTags: {
      baseName: "group_tags",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionGridCohortType",
    },
    unit: {
      baseName: "unit",
      type: "Array<ProductAnalyticsUnit>",
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
    return ProductAnalyticsRetentionGridCohort.attributeTypeMap;
  }

  public constructor() {}
}
