import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccountAccessTokenCreateData } from "./ServiceAccountAccessTokenCreateData";

/**
 * Request used to create a service account access token.
 */
export class ServiceAccountAccessTokenCreateRequest {
  /**
   * Object used to create a service account access token.
   */
  "data": ServiceAccountAccessTokenCreateData;
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
      type: "ServiceAccountAccessTokenCreateData",
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
    return ServiceAccountAccessTokenCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
