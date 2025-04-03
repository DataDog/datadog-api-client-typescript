import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageAnalyzedLogsHour } from "./UsageAnalyzedLogsHour";

/**
 * A response containing the number of analyzed logs for each hour for a given organization.
 */
export class UsageAnalyzedLogsResponse {
  /**
   * Get hourly usage for analyzed logs.
   */
  "usage"?: Array<UsageAnalyzedLogsHour>;
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
      type: "Array<UsageAnalyzedLogsHour>",
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
    return UsageAnalyzedLogsResponse.attributeTypeMap;
  }

  public constructor() {}
}
