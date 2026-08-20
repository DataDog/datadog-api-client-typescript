/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionCellScopeType } from "./ProductAnalyticsRetentionCellScopeType";
import { ProductAnalyticsRetentionCohortTarget } from "./ProductAnalyticsRetentionCohortTarget";
import { ProductAnalyticsRetentionIndexTarget } from "./ProductAnalyticsRetentionIndexTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Narrows a retention query to a single cell, at the intersection of one cohort and one return period.
 */
export class ProductAnalyticsRetentionCellScope {
  /**
   * Selects a cohort, either by index or by the aggregation that rolls all cohorts together.
   */
  "cohortTarget": ProductAnalyticsRetentionCohortTarget;
  /**
   * Selects a cohort or return period by its zero-based position in the grid.
   */
  "returnPeriodTarget": ProductAnalyticsRetentionIndexTarget;
  /**
   * The discriminator identifying a scope narrowed to one grid cell.
   */
  "type": ProductAnalyticsRetentionCellScopeType;

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
    cohortTarget: {
      baseName: "cohort_target",
      type: "ProductAnalyticsRetentionCohortTarget",
      required: true,
    },
    returnPeriodTarget: {
      baseName: "return_period_target",
      type: "ProductAnalyticsRetentionIndexTarget",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionCellScopeType",
      required: true,
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
    return ProductAnalyticsRetentionCellScope.attributeTypeMap;
  }

  public constructor() {}
}
