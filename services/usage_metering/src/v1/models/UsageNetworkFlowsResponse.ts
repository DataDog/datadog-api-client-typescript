import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageNetworkFlowsHour } from "./UsageNetworkFlowsHour";

/**
 * Response containing the number of netflow events indexed for each hour for a given organization.
 */
export class UsageNetworkFlowsResponse {
  /**
   * Get hourly usage for Network Flows.
   */
  "usage"?: Array<UsageNetworkFlowsHour>;
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
    usage: {
      baseName: "usage",
      type: "Array<UsageNetworkFlowsHour>",
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
    return UsageNetworkFlowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
