import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageLogsByIndexHour } from "./UsageLogsByIndexHour";

/**
 * Response containing the number of indexed logs for each hour and index for a given organization.
 */
export class UsageLogsByIndexResponse {
  /**
   * An array of objects regarding hourly usage of logs by index response.
   */
  "usage"?: Array<UsageLogsByIndexHour>;
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
      type: "Array<UsageLogsByIndexHour>",
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
    return UsageLogsByIndexResponse.attributeTypeMap;
  }

  public constructor() {}
}
