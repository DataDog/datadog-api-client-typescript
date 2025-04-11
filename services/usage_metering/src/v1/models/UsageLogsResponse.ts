import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageLogsHour } from "./UsageLogsHour";

/**
 * Response containing the number of logs for each hour.
 */
export class UsageLogsResponse {
  /**
   * An array of objects regarding hourly usage of logs.
   */
  "usage"?: Array<UsageLogsHour>;
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
      type: "Array<UsageLogsHour>",
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
    return UsageLogsResponse.attributeTypeMap;
  }

  public constructor() {}
}
