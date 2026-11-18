import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyNodeTarget } from "./ProductAnalyticsJourneyNodeTarget";
import { ProductAnalyticsJourneySearch } from "./ProductAnalyticsJourneySearch";
import { ProductAnalyticsSampling } from "./ProductAnalyticsSampling";

/**
 * Query definition for a journey drop-off analysis request.
 */
export class ProductAnalyticsJourneyDropOffQuery {
  /**
   * Sampling configuration for a query.
   */
  "sampling"?: ProductAnalyticsSampling;
  /**
   * Defines the steps of the journey and the filters applied to it.
   */
  "search": ProductAnalyticsJourneySearch;
  /**
   * A reference to a single step of the journey.
   */
  "target"?: ProductAnalyticsJourneyNodeTarget;
  /**
   * Maximum number of issues to return.
   */
  "topIssueCount"?: number;
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
    sampling: {
      baseName: "sampling",
      type: "ProductAnalyticsSampling",
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsJourneySearch",
      required: true,
    },
    target: {
      baseName: "target",
      type: "ProductAnalyticsJourneyNodeTarget",
    },
    topIssueCount: {
      baseName: "top_issue_count",
      type: "number",
      format: "int64",
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
    return ProductAnalyticsJourneyDropOffQuery.attributeTypeMap;
  }

  public constructor() {}
}
