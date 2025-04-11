import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageRumSessionsHour } from "./UsageRumSessionsHour";

/**
 * Response containing the number of RUM sessions for each hour for a given organization.
 */
export class UsageRumSessionsResponse {
  /**
   * Get hourly usage for RUM sessions.
   */
  "usage"?: Array<UsageRumSessionsHour>;
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
      type: "Array<UsageRumSessionsHour>",
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
    return UsageRumSessionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
