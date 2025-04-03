import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricCustomAggregation } from "./MetricCustomAggregation";

/**
 * Object containing the definition of a metric's actively queried tags and aggregations.
 */
export class MetricSuggestedTagsAttributes {
  /**
   * List of aggregation combinations that have been actively queried.
   */
  "activeAggregations"?: Array<MetricCustomAggregation>;
  /**
   * List of tag keys that have been actively queried.
   */
  "activeTags"?: Array<string>;
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
    activeAggregations: {
      baseName: "active_aggregations",
      type: "Array<MetricCustomAggregation>",
    },
    activeTags: {
      baseName: "active_tags",
      type: "Array<string>",
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
    return MetricSuggestedTagsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
