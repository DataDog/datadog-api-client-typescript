import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetAstResponseData } from "./GetAstResponseData";

/**
 * The response payload containing the parsed abstract syntax tree.
 */
export class GetAstResponse {
  /**
   * The primary data object in the get-AST response.
   */
  "data": GetAstResponseData;
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
      type: "GetAstResponseData",
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
    return GetAstResponse.attributeTypeMap;
  }

  public constructor() {}
}
