import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicAPIKeyType } from "./AnthropicAPIKeyType";

/**
 * The definition of the `AnthropicAPIKey` object.
 */
export class AnthropicAPIKeyUpdate {
  /**
   * The `AnthropicAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: string;
  /**
   * The definition of the `AnthropicAPIKey` object.
   */
  "type": AnthropicAPIKeyType;
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
    },
    type: {
      baseName: "type",
      type: "AnthropicAPIKeyType",
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
    return AnthropicAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
