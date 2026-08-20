/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionCompute } from "./ProductAnalyticsRetentionCompute";
import { ProductAnalyticsRetentionGroupBy } from "./ProductAnalyticsRetentionGroupBy";
import { ProductAnalyticsRetentionScope } from "./ProductAnalyticsRetentionScope";
import { ProductAnalyticsRetentionSearch } from "./ProductAnalyticsRetentionSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query definition for a retention scalar or retention timeseries request.
 */
export class ProductAnalyticsFormulaRetentionQuery {
  /**
   * Restricts a retention query to part of the grid, so that results can be examined in detail.
   * Omit it to compute the whole grid.
   */
  "computationScope"?: ProductAnalyticsRetentionScope;
  /**
   * The metric and aggregation applied to a retention query.
   */
  "compute": ProductAnalyticsRetentionCompute;
  /**
   * Splits the results by the values of one or more facets.
   */
  "groupBy"?: Array<ProductAnalyticsRetentionGroupBy>;
  /**
   * Defines the cohort and return criteria that make up a retention query.
   */
  "search": ProductAnalyticsRetentionSearch;

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
    computationScope: {
      baseName: "computation_scope",
      type: "ProductAnalyticsRetentionScope",
    },
    compute: {
      baseName: "compute",
      type: "ProductAnalyticsRetentionCompute",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsRetentionGroupBy>",
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsRetentionSearch",
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
    return ProductAnalyticsFormulaRetentionQuery.attributeTypeMap;
  }

  public constructor() {}
}
