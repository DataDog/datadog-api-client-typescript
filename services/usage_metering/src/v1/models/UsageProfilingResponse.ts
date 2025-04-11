import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageProfilingHour } from "./UsageProfilingHour";

/**
 * Response containing the number of profiled hosts for each hour for a given organization.
 */
export class UsageProfilingResponse {
  /**
   * Get hourly usage for profiled hosts.
   */
  "usage"?: Array<UsageProfilingHour>;
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
      type: "Array<UsageProfilingHour>",
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
    return UsageProfilingResponse.attributeTypeMap;
  }

  public constructor() {}
}
