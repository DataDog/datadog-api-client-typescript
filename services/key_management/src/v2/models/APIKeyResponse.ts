import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeyResponseIncludedItem } from "./APIKeyResponseIncludedItem";
import { FullAPIKey } from "./FullAPIKey";

/**
 * Response for retrieving an API key.
 */
export class APIKeyResponse {
  /**
   * Datadog API key.
   */
  "data"?: FullAPIKey;
  /**
   * Array of objects related to the API key.
   */
  "included"?: Array<APIKeyResponseIncludedItem>;
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
    data: {
      baseName: "data",
      type: "FullAPIKey",
    },
    included: {
      baseName: "included",
      type: "Array<APIKeyResponseIncludedItem>",
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
    return APIKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
