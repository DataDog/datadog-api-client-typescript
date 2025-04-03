import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeysResponseMetaPage } from "./APIKeysResponseMetaPage";

/**
 * Additional information related to api keys response.
 */
export class APIKeysResponseMeta {
  /**
   * Max allowed number of API keys.
   */
  "maxAllowed"?: number;
  /**
   * Additional information related to the API keys response.
   */
  "page"?: APIKeysResponseMetaPage;
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
    maxAllowed: {
      baseName: "max_allowed",
      type: "number",
      format: "int64",
    },
    page: {
      baseName: "page",
      type: "APIKeysResponseMetaPage",
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
    return APIKeysResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
