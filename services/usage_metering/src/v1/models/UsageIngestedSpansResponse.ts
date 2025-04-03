import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageIngestedSpansHour } from "./UsageIngestedSpansHour";

/**
 * Response containing the ingested spans usage for each hour for a given organization.
 */
export class UsageIngestedSpansResponse {
  /**
   * Get hourly usage for ingested spans.
   */
  "usage"?: Array<UsageIngestedSpansHour>;
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
      type: "Array<UsageIngestedSpansHour>",
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
    return UsageIngestedSpansResponse.attributeTypeMap;
  }

  public constructor() {}
}
