import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSyntheticsBrowserHour } from "./UsageSyntheticsBrowserHour";

/**
 * Response containing the number of Synthetics Browser tests run for each hour for a given organization.
 */
export class UsageSyntheticsBrowserResponse {
  /**
   * Get hourly usage for Synthetics Browser tests.
   */
  "usage"?: Array<UsageSyntheticsBrowserHour>;
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
      type: "Array<UsageSyntheticsBrowserHour>",
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
    return UsageSyntheticsBrowserResponse.attributeTypeMap;
  }

  public constructor() {}
}
