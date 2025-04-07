import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageIndexedSpansHour } from "./UsageIndexedSpansHour";

/**
 * A response containing indexed spans usage.
 */
export class UsageIndexedSpansResponse {
  /**
   * Array with the number of hourly traces indexed for a given organization.
   */
  "usage"?: Array<UsageIndexedSpansHour>;
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
      type: "Array<UsageIndexedSpansHour>",
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
    return UsageIndexedSpansResponse.attributeTypeMap;
  }

  public constructor() {}
}
