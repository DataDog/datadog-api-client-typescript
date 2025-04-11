import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeyCreateAttributes } from "./APIKeyCreateAttributes";
import { APIKeysType } from "./APIKeysType";

/**
 * Object used to create an API key.
 */
export class APIKeyCreateData {
  /**
   * Attributes used to create an API Key.
   */
  "attributes": APIKeyCreateAttributes;
  /**
   * API Keys resource type.
   */
  "type": APIKeysType;
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
    attributes: {
      baseName: "attributes",
      type: "APIKeyCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
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
    return APIKeyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
