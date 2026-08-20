import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionCellScope } from "./ProductAnalyticsRetentionCellScope";
import { ProductAnalyticsRetentionListColumn } from "./ProductAnalyticsRetentionListColumn";
import { ProductAnalyticsRetentionSearch } from "./ProductAnalyticsRetentionSearch";

/**
 * Query definition for a retention list request.
 */
export class ProductAnalyticsRetentionListQuery {
  /**
   * The attribute columns to include in each returned row.
   */
  "columns"?: Array<ProductAnalyticsRetentionListColumn>;
  /**
   * Narrows a retention query to a single cell, at the intersection of one cohort and one return period.
   */
  "computationScope": ProductAnalyticsRetentionCellScope;
  /**
   * Maximum number of rows to return. Use `0` for no limit.
   */
  "limit"?: number;
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
    columns: {
      baseName: "columns",
      type: "Array<ProductAnalyticsRetentionListColumn>",
    },
    computationScope: {
      baseName: "computation_scope",
      type: "ProductAnalyticsRetentionCellScope",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
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
    return ProductAnalyticsRetentionListQuery.attributeTypeMap;
  }

  public constructor() {}
}
