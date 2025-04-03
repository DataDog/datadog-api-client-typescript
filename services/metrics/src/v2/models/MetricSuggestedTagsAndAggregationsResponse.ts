import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricSuggestedTagsAndAggregations } from "./MetricSuggestedTagsAndAggregations";

/**
 * Response object that includes a single metric's actively queried tags and aggregations.
 */
export class MetricSuggestedTagsAndAggregationsResponse {
  /**
   * Object for a single metric's actively queried tags and aggregations.
   */
  "data"?: MetricSuggestedTagsAndAggregations;
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
    data: {
      baseName: "data",
      type: "MetricSuggestedTagsAndAggregations",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricSuggestedTagsAndAggregationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
