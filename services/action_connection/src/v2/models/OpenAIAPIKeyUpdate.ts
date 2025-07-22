import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIAPIKeyType } from "./OpenAIAPIKeyType";

/**
 * The definition of the `OpenAIAPIKey` object.
 */
export class OpenAIAPIKeyUpdate {
  /**
   * The `OpenAIAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: string;
  /**
   * The definition of the `OpenAIAPIKey` object.
   */
  "type": OpenAIAPIKeyType;
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
      type: "OpenAIAPIKeyType",
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
    return OpenAIAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
