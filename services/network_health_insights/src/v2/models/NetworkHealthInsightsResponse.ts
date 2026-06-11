import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NetworkHealthInsight } from "./NetworkHealthInsight";

/**
 * Response containing a list of network health insights for the organization.
 */
export class NetworkHealthInsightsResponse {
  /**
   * Array of network health insights returned for the query window.
   */
  "data": Array<NetworkHealthInsight>;
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
      type: "Array<NetworkHealthInsight>",
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
    return NetworkHealthInsightsResponse.attributeTypeMap;
  }

  public constructor() {}
}
