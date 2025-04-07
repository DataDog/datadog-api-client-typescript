import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricActiveConfigurationType } from "./MetricActiveConfigurationType";
import { MetricSuggestedTagsAttributes } from "./MetricSuggestedTagsAttributes";

/**
 * Object for a single metric's actively queried tags and aggregations.
 */
export class MetricSuggestedTagsAndAggregations {
  /**
   * Object containing the definition of a metric's actively queried tags and aggregations.
   */
  "attributes"?: MetricSuggestedTagsAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric actively queried configuration resource type.
   */
  "type"?: MetricActiveConfigurationType;
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
    attributes: {
      baseName: "attributes",
      type: "MetricSuggestedTagsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricActiveConfigurationType",
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
    return MetricSuggestedTagsAndAggregations.attributeTypeMap;
  }

  public constructor() {}
}
