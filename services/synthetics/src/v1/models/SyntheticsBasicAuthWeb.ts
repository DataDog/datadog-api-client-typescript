import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBasicAuthWebType } from "./SyntheticsBasicAuthWebType";

/**
 * Object to handle basic authentication when performing the test.
 */
export class SyntheticsBasicAuthWeb {
  /**
   * Password to use for the basic authentication.
   */
  "password": string;
  /**
   * The type of basic authentication to use when performing the test.
   */
  "type"?: SyntheticsBasicAuthWebType;
  /**
   * Username to use for the basic authentication.
   */
  "username": string;
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
    password: {
      baseName: "password",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsBasicAuthWebType",
    },
    username: {
      baseName: "username",
      type: "string",
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
    return SyntheticsBasicAuthWeb.attributeTypeMap;
  }

  public constructor() {}
}
