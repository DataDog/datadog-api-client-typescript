import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JSONAPIErrorItem } from "./JSONAPIErrorItem";

/**
 * API error response.
 */
export class JSONAPIErrorResponse {
  /**
   * A list of errors.
   */
  "errors": Array<JSONAPIErrorItem>;
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
    errors: {
      baseName: "errors",
      type: "Array<JSONAPIErrorItem>",
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
    return JSONAPIErrorResponse.attributeTypeMap;
  }

  public constructor() {}
}
