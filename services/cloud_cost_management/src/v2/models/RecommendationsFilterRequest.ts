import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationsFilterRequestSortItems } from "./RecommendationsFilterRequestSortItems";

/**
 * Request body for filtering cost recommendations.
 */
export class RecommendationsFilterRequest {
  /**
   * Filter expression applied to the recommendations.
   */
  "filter"?: string;
  /**
   * Recommendations scope. Defaults to `ccm`; use `experiment` for experimental recommendations or `*` for both.
   */
  "scope"?: string;
  /**
   * Ordered list of sort clauses applied to the result set.
   */
  "sort"?: Array<RecommendationsFilterRequestSortItems>;
  /**
   * Active view name (for example, `active`, `dismissed`, `open`, `in-progress`, or `completed`).
   */
  "view"?: string;
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
    filter: {
      baseName: "filter",
      type: "string",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    sort: {
      baseName: "sort",
      type: "Array<RecommendationsFilterRequestSortItems>",
    },
    view: {
      baseName: "view",
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
    return RecommendationsFilterRequest.attributeTypeMap;
  }

  public constructor() {}
}
