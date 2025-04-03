import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApiKey } from "./ApiKey";

/**
 * An API key with its associated metadata.
 */
export class ApiKeyResponse {
  /**
   * Datadog API key.
   */
  "apiKey"?: ApiKey;
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
      type: "ApiKey",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
