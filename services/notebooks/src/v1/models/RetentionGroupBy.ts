import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionGroupBySort } from "./RetentionGroupBySort";
import { RetentionGroupByTarget } from "./RetentionGroupByTarget";

/**
 * Group by configuration for retention queries.
 */
export class RetentionGroupBy {
  /**
   * Facet to group by.
   */
  "facet": string;
  /**
   * Maximum number of groups.
   */
  "limit"?: number;
  /**
   * Whether to exclude missing values.
   */
  "shouldExcludeMissing"?: boolean;
  /**
   * Sort configuration for retention group by.
   */
  "sort"?: RetentionGroupBySort;
  /**
   * Source field.
   */
  "source"?: string;
  /**
   * Target for retention group by.
   */
  "target": RetentionGroupByTarget;
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
      type: "RetentionGroupBySort",
    },
    source: {
      baseName: "source",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "RetentionGroupByTarget",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
