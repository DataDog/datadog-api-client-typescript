import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricEstimateAttributes } from "./MetricEstimateAttributes";
import { MetricEstimateResourceType } from "./MetricEstimateResourceType";

/**
 * Object for a metric cardinality estimate.
 */
export class MetricEstimate {
  /**
   * Object containing the definition of a metric estimate attribute.
   */
  "attributes"?: MetricEstimateAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric estimate resource type.
   */
  "type"?: MetricEstimateResourceType;
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
      type: "MetricEstimateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricEstimateResourceType",
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
    return MetricEstimate.attributeTypeMap;
  }

  public constructor() {}
}
