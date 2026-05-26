import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetAstRequestData } from "./GetAstRequestData";

/**
 * The request payload for parsing source code into an abstract syntax tree.
 */
export class GetAstRequest {
  /**
   * The primary data object in the get-AST request.
   */
  "data": GetAstRequestData;
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
      type: "GetAstRequestData",
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
    return GetAstRequest.attributeTypeMap;
  }

  public constructor() {}
}
