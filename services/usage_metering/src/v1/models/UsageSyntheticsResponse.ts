import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSyntheticsHour } from "./UsageSyntheticsHour";

/**
 * Response containing the number of Synthetics API tests run for each hour for a given organization.
 */
export class UsageSyntheticsResponse {
  /**
   * Array with the number of hourly Synthetics test run for a given organization.
   */
  "usage"?: Array<UsageSyntheticsHour>;
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
      type: "Array<UsageSyntheticsHour>",
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
    return UsageSyntheticsResponse.attributeTypeMap;
  }

  public constructor() {}
}
