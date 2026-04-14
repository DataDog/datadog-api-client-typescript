/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionProductAnalyticsExtendedDataSource } from "./FormulaAndFunctionProductAnalyticsExtendedDataSource";
import { FormulaAndFunctionProductAnalyticsExtendedQueryDefinitionIndexesItems } from "./FormulaAndFunctionProductAnalyticsExtendedQueryDefinitionIndexesItems";
import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsExtendedCompute } from "./ProductAnalyticsExtendedCompute";
import { ProductAnalyticsExtendedGroupBy } from "./ProductAnalyticsExtendedGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions Product Analytics Extended query for advanced analytics features.
 */
export class FormulaAndFunctionProductAnalyticsExtendedQueryDefinition {
  /**
   * Product Analytics/RUM audience filters.
   */
  "audienceFilters"?: ProductAnalyticsAudienceFilters;
  /**
   * Compute configuration for Product Analytics Extended queries.
   */
  "compute": ProductAnalyticsExtendedCompute;
  /**
   * Data source for Product Analytics Extended queries.
   */
  "dataSource": FormulaAndFunctionProductAnalyticsExtendedDataSource;
  /**
   * Group by configuration.
   */
  "groupBy"?: Array<ProductAnalyticsExtendedGroupBy>;
  /**
   * Event indexes to query.
   */
  "indexes"?: Array<FormulaAndFunctionProductAnalyticsExtendedQueryDefinitionIndexesItems>;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Base query for Product Analytics.
   */
  "query": any;

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
    audienceFilters: {
      baseName: "audience_filters",
      type: "ProductAnalyticsAudienceFilters",
    },
    compute: {
      baseName: "compute",
      type: "ProductAnalyticsExtendedCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionProductAnalyticsExtendedDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsExtendedGroupBy>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<FormulaAndFunctionProductAnalyticsExtendedQueryDefinitionIndexesItems>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "any",
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
    return FormulaAndFunctionProductAnalyticsExtendedQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
