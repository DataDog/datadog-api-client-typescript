import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageDBMHour } from "./UsageDBMHour";

/**
 * Response containing the Database Monitoring usage for each hour for a given organization.
 */
export class UsageDBMResponse {
  /**
   * Get hourly usage for Database Monitoring
   */
  "usage"?: Array<UsageDBMHour>;
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
      type: "Array<UsageDBMHour>",
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
    return UsageDBMResponse.attributeTypeMap;
  }

  public constructor() {}
}
