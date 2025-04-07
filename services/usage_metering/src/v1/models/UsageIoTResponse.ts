import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageIoTHour } from "./UsageIoTHour";

/**
 * Response containing the IoT usage for each hour for a given organization.
 */
export class UsageIoTResponse {
  /**
   * Get hourly usage for IoT.
   */
  "usage"?: Array<UsageIoTHour>;
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
      type: "Array<UsageIoTHour>",
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
    return UsageIoTResponse.attributeTypeMap;
  }

  public constructor() {}
}
