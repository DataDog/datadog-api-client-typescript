import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPTokenResponseValue } from "./HTTPTokenResponseValue";

/**
 * An HTTP authentication token returned by the API. Its type is implicitly `SECRET`.
 */
export class HTTPTokenResponse {
  /**
   * Name of the HTTP authentication token.
   */
  "name": string;
  /**
   * The `HTTPTokenResponse` `value`.
   */
  "value": HTTPTokenResponseValue;
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
    value: {
      baseName: "value",
      type: "HTTPTokenResponseValue",
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
    return HTTPTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
