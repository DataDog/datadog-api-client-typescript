import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageNetworkHostsHour } from "./UsageNetworkHostsHour";

/**
 * Response containing the number of active NPM hosts for each hour for a given organization.
 */
export class UsageNetworkHostsResponse {
  /**
   * Get hourly usage for NPM hosts.
   */
  "usage"?: Array<UsageNetworkHostsHour>;
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
      type: "Array<UsageNetworkHostsHour>",
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
    return UsageNetworkHostsResponse.attributeTypeMap;
  }

  public constructor() {}
}
