import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSNMPHour } from "./UsageSNMPHour";

/**
 * Response containing the number of SNMP devices for each hour for a given organization.
 */
export class UsageSNMPResponse {
  /**
   * Get hourly usage for SNMP devices.
   */
  "usage"?: Array<UsageSNMPHour>;
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
      type: "Array<UsageSNMPHour>",
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
    return UsageSNMPResponse.attributeTypeMap;
  }

  public constructor() {}
}
