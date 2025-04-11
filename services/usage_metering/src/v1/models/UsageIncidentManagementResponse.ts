import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageIncidentManagementHour } from "./UsageIncidentManagementHour";

/**
 * Response containing the incident management usage for each hour for a given organization.
 */
export class UsageIncidentManagementResponse {
  /**
   * Get hourly usage for incident management.
   */
  "usage"?: Array<UsageIncidentManagementHour>;
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
      type: "Array<UsageIncidentManagementHour>",
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
    return UsageIncidentManagementResponse.attributeTypeMap;
  }

  public constructor() {}
}
