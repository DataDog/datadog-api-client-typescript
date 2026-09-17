import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeRunAsPrincipal } from "./DowntimeRunAsPrincipal";

/**
 * A set of principals allowed to act on behalf of the downtime.
 */
export class DowntimeRunAsItem {
  /**
   * List of principals allowed to act on behalf of the downtime.
   */
  "principals"?: Array<DowntimeRunAsPrincipal>;
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
    principals: {
      baseName: "principals",
      type: "Array<DowntimeRunAsPrincipal>",
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
    return DowntimeRunAsItem.attributeTypeMap;
  }

  public constructor() {}
}
