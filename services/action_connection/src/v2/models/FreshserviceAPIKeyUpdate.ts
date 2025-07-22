import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FreshserviceAPIKeyType } from "./FreshserviceAPIKeyType";

/**
 * The definition of the `FreshserviceAPIKey` object.
 */
export class FreshserviceAPIKeyUpdate {
  /**
   * The `FreshserviceAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: string;
  /**
   * The `FreshserviceAPIKeyUpdate` `domain`.
   */
  "domain"?: string;
  /**
   * The definition of the `FreshserviceAPIKey` object.
   */
  "type": FreshserviceAPIKeyType;
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
    domain: {
      baseName: "domain",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FreshserviceAPIKeyType",
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
    return FreshserviceAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
