import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OktaAPITokenType } from "./OktaAPITokenType";

/**
 * The definition of the `OktaAPIToken` object.
 */
export class OktaAPIToken {
  /**
   * The `OktaAPIToken` `api_token`.
   */
  "apiToken": string;
  /**
   * The `OktaAPIToken` `domain`.
   */
  "domain": string;
  /**
   * The definition of the `OktaAPIToken` object.
   */
  "type": OktaAPITokenType;
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
    apiToken: {
      baseName: "api_token",
      type: "string",
      required: true,
    },
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OktaAPITokenType",
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
    return OktaAPIToken.attributeTypeMap;
  }

  public constructor() {}
}
