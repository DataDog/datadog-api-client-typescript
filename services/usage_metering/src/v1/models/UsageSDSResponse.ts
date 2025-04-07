import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSDSHour } from "./UsageSDSHour";

/**
 * Response containing the Sensitive Data Scanner usage for each hour for a given organization.
 */
export class UsageSDSResponse {
  /**
   * Get hourly usage for Sensitive Data Scanner.
   */
  "usage"?: Array<UsageSDSHour>;
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
      type: "Array<UsageSDSHour>",
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
    return UsageSDSResponse.attributeTypeMap;
  }

  public constructor() {}
}
