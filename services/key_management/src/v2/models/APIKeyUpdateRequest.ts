import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeyUpdateData } from "./APIKeyUpdateData";

/**
 * Request used to update an API key.
 */
export class APIKeyUpdateRequest {
  /**
   * Object used to update an API key.
   */
  "data": APIKeyUpdateData;
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
      type: "APIKeyUpdateData",
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
    return APIKeyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
