import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageRumUnitsHour } from "./UsageRumUnitsHour";

/**
 * Response containing the number of RUM Units for each hour for a given organization.
 */
export class UsageRumUnitsResponse {
  /**
   * Get hourly usage for RUM Units.
   */
  "usage"?: Array<UsageRumUnitsHour>;
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
      type: "Array<UsageRumUnitsHour>",
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
    return UsageRumUnitsResponse.attributeTypeMap;
  }

  public constructor() {}
}
