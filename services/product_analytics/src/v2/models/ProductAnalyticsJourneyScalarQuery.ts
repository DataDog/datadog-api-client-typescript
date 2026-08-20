import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsGraphQueryGroupBy } from "./ProductAnalyticsGraphQueryGroupBy";
import { ProductAnalyticsJourneyScalarCompute } from "./ProductAnalyticsJourneyScalarCompute";
import { ProductAnalyticsJourneySearch } from "./ProductAnalyticsJourneySearch";

/**
 * Query definition for a journey scalar request.
 */
export class ProductAnalyticsJourneyScalarQuery {
  /**
   * Defines the metric computed over the journey for a scalar query.
   */
  "compute": ProductAnalyticsJourneyScalarCompute;
  /**
   * Segments the results by the values of one or more facets.
   */
  "groupBy"?: Array<ProductAnalyticsGraphQueryGroupBy>;
  /**
   * Caller-defined identifier echoed back in the results.
   */
  "queryId"?: string;
  /**
   * Defines the steps of the journey and the filters applied to it.
   */
  "search": ProductAnalyticsJourneySearch;
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
    compute: {
      baseName: "compute",
      type: "ProductAnalyticsJourneyScalarCompute",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsGraphQueryGroupBy>",
    },
    queryId: {
      baseName: "query_id",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsJourneySearch",
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
    return ProductAnalyticsJourneyScalarQuery.attributeTypeMap;
  }

  public constructor() {}
}
