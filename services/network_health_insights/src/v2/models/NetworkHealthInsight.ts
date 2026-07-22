import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NetworkHealthInsightAttributes } from "./NetworkHealthInsightAttributes";
import { NetworkHealthInsightsType } from "./NetworkHealthInsightsType";

/**
 * A single network health insight describing a service-to-service connectivity issue.
 */
export class NetworkHealthInsight {
  /**
   * Detailed attributes of a network health insight.
   */
  "attributes": NetworkHealthInsightAttributes;
  /**
   * Unique identifier for this network health insight.
   */
  "id": string;
  /**
   * The resource type for network health insights. Always `network-health-insights`.
   */
  "type": NetworkHealthInsightsType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "NetworkHealthInsightAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NetworkHealthInsightsType",
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
    return NetworkHealthInsight.attributeTypeMap;
  }

  public constructor() {}
}
