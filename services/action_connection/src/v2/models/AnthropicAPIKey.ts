import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicAPIKeyApiToken } from "./AnthropicAPIKeyApiToken";
import { AnthropicAPIKeyType } from "./AnthropicAPIKeyType";

/**
 * The definition of the `AnthropicAPIKey` object.
 */
export class AnthropicAPIKey {
  /**
   * The `AnthropicAPIKey` `api_token`.
   */
  "apiToken": AnthropicAPIKeyApiToken;
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
      type: "AnthropicAPIKeyApiToken",
      required: true,
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
    return AnthropicAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
