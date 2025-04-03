import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSyntheticsAPIHour } from "./UsageSyntheticsAPIHour";

/**
 * Response containing the number of Synthetics API tests run for each hour for a given organization.
 */
export class UsageSyntheticsAPIResponse {
  /**
   * Get hourly usage for Synthetics API tests.
   */
  "usage"?: Array<UsageSyntheticsAPIHour>;
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
      type: "Array<UsageSyntheticsAPIHour>",
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
    return UsageSyntheticsAPIResponse.attributeTypeMap;
  }

  public constructor() {}
}
