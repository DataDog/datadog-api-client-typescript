import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ValidateV2Data } from "./ValidateV2Data";

/**
 * Response for the API key validation endpoint.
 */
export class ValidateV2Response {
  /**
   * Data object containing the API key validation result.
   */
  "data": ValidateV2Data;
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
      type: "ValidateV2Data",
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
    return ValidateV2Response.attributeTypeMap;
  }

  public constructor() {}
}
