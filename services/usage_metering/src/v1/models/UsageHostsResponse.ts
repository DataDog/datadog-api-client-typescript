import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageHostHour } from "./UsageHostHour";

/**
 * Host usage response.
 */
export class UsageHostsResponse {
  /**
   * An array of objects related to host usage.
   */
  "usage"?: Array<UsageHostHour>;
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
      type: "Array<UsageHostHour>",
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
    return UsageHostsResponse.attributeTypeMap;
  }

  public constructor() {}
}
