import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetAstRequestData } from "./GetAstRequestData";

/**
 * The request payload for parsing source code into an abstract syntax tree.
 */
export class GetAstRequest {
  /**
   * CSRF token for security, sent by browser-based clients. Ignored by the API when absent.
   */
  "authenticationToken"?: string;
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
    authenticationToken: {
      baseName: "_authentication_token",
      type: "string",
    },
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
