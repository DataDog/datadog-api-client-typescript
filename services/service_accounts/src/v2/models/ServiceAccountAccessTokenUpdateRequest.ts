import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccountAccessTokenUpdateData } from "./ServiceAccountAccessTokenUpdateData";

/**
 * Request used to update a service account access token.
 */
export class ServiceAccountAccessTokenUpdateRequest {
  /**
   * Object used to update a service account access token.
   */
  "data": ServiceAccountAccessTokenUpdateData;
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
      type: "ServiceAccountAccessTokenUpdateData",
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
    return ServiceAccountAccessTokenUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
