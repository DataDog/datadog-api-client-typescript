import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageOnlineArchiveHour } from "./UsageOnlineArchiveHour";

/**
 * Online Archive usage response.
 */
export class UsageOnlineArchiveResponse {
  /**
   * Response containing Online Archive usage.
   */
  "usage"?: Array<UsageOnlineArchiveHour>;
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
      type: "Array<UsageOnlineArchiveHour>",
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
    return UsageOnlineArchiveResponse.attributeTypeMap;
  }

  public constructor() {}
}
