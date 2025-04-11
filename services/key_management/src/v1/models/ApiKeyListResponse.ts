import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApiKey } from "./ApiKey";

/**
 * List of API and application keys available for a given organization.
 */
export class ApiKeyListResponse {
  /**
   * Array of API keys.
   */
  "apiKeys"?: Array<ApiKey>;
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
    apiKeys: {
      baseName: "api_keys",
      type: "Array<ApiKey>",
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
    return ApiKeyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
