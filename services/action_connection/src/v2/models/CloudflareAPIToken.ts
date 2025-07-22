import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareAPITokenType } from "./CloudflareAPITokenType";

/**
 * The definition of the `CloudflareAPIToken` object.
 */
export class CloudflareAPIToken {
  /**
   * The `CloudflareAPIToken` `api_token`.
   */
  "apiToken": string;
  /**
   * The definition of the `CloudflareAPIToken` object.
   */
  "type": CloudflareAPITokenType;
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
    type: {
      baseName: "type",
      type: "CloudflareAPITokenType",
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
    return CloudflareAPIToken.attributeTypeMap;
  }

  public constructor() {}
}
