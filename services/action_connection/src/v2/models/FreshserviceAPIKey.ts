import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FreshserviceAPIKeyType } from "./FreshserviceAPIKeyType";

/**
 * The definition of the `FreshserviceAPIKey` object.
 */
export class FreshserviceAPIKey {
  /**
   * The `FreshserviceAPIKey` `api_key`.
   */
  "apiKey": string;
  /**
   * The `FreshserviceAPIKey` `domain`.
   */
  "domain": string;
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
      required: true,
    },
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
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
    return FreshserviceAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
