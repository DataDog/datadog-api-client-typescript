import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelGroupBySort } from "./ProductAnalyticsFunnelGroupBySort";
import { UserJourneySearchTarget } from "./UserJourneySearchTarget";

/**
 * Group by configuration for user journey funnel.
 */
export class ProductAnalyticsFunnelGroupBy {
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
   * Sort configuration for user journey funnel group by.
   */
  "sort"?: ProductAnalyticsFunnelGroupBySort;
  /**
   * Target for user journey search.
   */
  "target"?: UserJourneySearchTarget;
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
      type: "ProductAnalyticsFunnelGroupBySort",
    },
    target: {
      baseName: "target",
      type: "UserJourneySearchTarget",
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
    return ProductAnalyticsFunnelGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
