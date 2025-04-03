import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageLogsByRetentionHour } from "./UsageLogsByRetentionHour";

/**
 * Response containing the indexed logs usage broken down by retention period for an organization during a given hour.
 */
export class UsageLogsByRetentionResponse {
  /**
   * Get hourly usage for indexed logs by retention period.
   */
  "usage"?: Array<UsageLogsByRetentionHour>;
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
      type: "Array<UsageLogsByRetentionHour>",
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
    return UsageLogsByRetentionResponse.attributeTypeMap;
  }

  public constructor() {}
}
