import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeyResponseIncludedItem } from "./APIKeyResponseIncludedItem";
import { APIKeysResponseMeta } from "./APIKeysResponseMeta";
import { PartialAPIKey } from "./PartialAPIKey";

/**
 * Response for a list of API keys.
 */
export class APIKeysResponse {
  /**
   * Array of API keys.
   */
  "data"?: Array<PartialAPIKey>;
  /**
   * Array of objects related to the API key.
   */
  "included"?: Array<APIKeyResponseIncludedItem>;
  /**
   * Additional information related to api keys response.
   */
  "meta"?: APIKeysResponseMeta;
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
      type: "Array<PartialAPIKey>",
    },
    included: {
      baseName: "included",
      type: "Array<APIKeyResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "APIKeysResponseMeta",
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
    return APIKeysResponse.attributeTypeMap;
  }

  public constructor() {}
}
