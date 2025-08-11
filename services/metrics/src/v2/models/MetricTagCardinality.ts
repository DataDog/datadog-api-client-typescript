import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricTagCardinalityAttributes } from "./MetricTagCardinalityAttributes";

/**
 * Object containing metadata and attributes related to a specific tag key associated with the metric.
 */
export class MetricTagCardinality {
  /**
   * An object containing properties related to the tag key
   */
  "attributes"?: MetricTagCardinalityAttributes;
  /**
   * The name of the tag key.
   */
  "id"?: string;
  /**
   * This describes the endpoint action.
   */
  "type"?: string;
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
      type: "MetricTagCardinalityAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return MetricTagCardinality.attributeTypeMap;
  }

  public constructor() {}
}
