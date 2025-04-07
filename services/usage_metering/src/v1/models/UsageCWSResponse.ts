import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageCWSHour } from "./UsageCWSHour";

/**
 * Response containing the Cloud Workload Security usage for each hour for a given organization.
 */
export class UsageCWSResponse {
  /**
   * Get hourly usage for Cloud Workload Security.
   */
  "usage"?: Array<UsageCWSHour>;
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
      type: "Array<UsageCWSHour>",
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
    return UsageCWSResponse.attributeTypeMap;
  }

  public constructor() {}
}
