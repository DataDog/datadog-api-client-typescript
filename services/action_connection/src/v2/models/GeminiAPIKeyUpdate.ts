import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeminiAPIKeyType } from "./GeminiAPIKeyType";

/**
 * The definition of the `GeminiAPIKey` object.
 */
export class GeminiAPIKeyUpdate {
  /**
   * The `GeminiAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: string;
  /**
   * The definition of the `GeminiAPIKey` object.
   */
  "type": GeminiAPIKeyType;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GeminiAPIKeyType",
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
    return GeminiAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
