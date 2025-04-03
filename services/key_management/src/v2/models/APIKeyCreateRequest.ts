import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeyCreateData } from "./APIKeyCreateData";

/**
 * Request used to create an API key.
 */
export class APIKeyCreateRequest {
  /**
   * Object used to create an API key.
   */
  "data": APIKeyCreateData;
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
      type: "APIKeyCreateData",
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
    return APIKeyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
