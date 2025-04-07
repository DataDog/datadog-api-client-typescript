import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeysType } from "./APIKeysType";
import { APIKeyUpdateAttributes } from "./APIKeyUpdateAttributes";

/**
 * Object used to update an API key.
 */
export class APIKeyUpdateData {
  /**
   * Attributes used to update an API Key.
   */
  "attributes": APIKeyUpdateAttributes;
  /**
   * ID of the API key.
   */
  "id": string;
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
      type: "APIKeyUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
      required: true,
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
    return APIKeyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
