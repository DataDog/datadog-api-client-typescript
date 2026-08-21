import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsGroupBySort } from "./ProductAnalyticsGroupBySort";
import { ProductAnalyticsRetentionGroupByTarget } from "./ProductAnalyticsRetentionGroupByTarget";

/**
 * Splits retention results by the values of a facet.
 */
export class ProductAnalyticsRetentionGroupBy {
  /**
   * The attribute path to group by.
   */
  "facet": string;
  /**
   * Maximum number of groups to return. Omit it to let the service choose.
   */
  "limit"?: number;
  /**
   * Whether to drop entities that have no value for the facet.
   */
  "shouldExcludeMissing"?: boolean;
  /**
   * Sort configuration for group-by results.
   */
  "sort"?: ProductAnalyticsGroupBySort;
  /**
   * Audience source backing the group-by, when grouping by an audience rather than a facet.
   */
  "source"?: string;
  /**
   * Which axis of the retention grid a group-by applies to.
   */
  "target": ProductAnalyticsRetentionGroupByTarget;
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
    target: {
      baseName: "target",
      type: "ProductAnalyticsRetentionGroupByTarget",
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
    return ProductAnalyticsRetentionGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
