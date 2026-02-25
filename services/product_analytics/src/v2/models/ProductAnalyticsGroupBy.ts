import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsGroupBySort } from "./ProductAnalyticsGroupBySort";

/**
 * A group-by rule for segmenting results by facet values.
 */
export class ProductAnalyticsGroupBy {
  /**
   * The facet to group by.
   */
  "facet": string;
  /**
   * Maximum number of groups to return.
   */
  "limit"?: number;
  /**
   * Exclude results with missing facet values.
   */
  "shouldExcludeMissing"?: boolean;
  /**
   * Sort configuration for group-by results.
   */
  "sort"?: ProductAnalyticsGroupBySort;
  /**
   * The source for audience-filter-based group-by.
   */
  "source"?: string;
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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    shouldExcludeMissing: {
      baseName: "should_exclude_missing",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "ProductAnalyticsGroupBySort",
    },
    source: {
      baseName: "source",
      type: "string",
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
    return ProductAnalyticsGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
