import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPTokenValue } from "./HTTPTokenValue";
import { TokenType } from "./TokenType";

/**
 * The definition of `HTTPToken` object.
 */
export class HTTPToken {
  /**
   * The `HTTPToken` `name`.
   */
  "name": string;
  /**
   * The definition of `TokenType` object.
   */
  "type": TokenType;
  /**
   * The `HTTPToken` `value`.
   */
  "value": HTTPTokenValue;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TokenType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "HTTPTokenValue",
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
    return HTTPToken.attributeTypeMap;
  }

  public constructor() {}
}
