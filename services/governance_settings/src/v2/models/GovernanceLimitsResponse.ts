import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceLimitData } from "./GovernanceLimitData";

/**
 * A list of governance limits.
 */
export class GovernanceLimitsResponse {
  /**
   * An array of governance limit resources.
   */
  "data": Array<GovernanceLimitData>;
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
    data: {
      baseName: "data",
      type: "Array<GovernanceLimitData>",
      required: true,
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
    return GovernanceLimitsResponse.attributeTypeMap;
  }

  public constructor() {}
}
