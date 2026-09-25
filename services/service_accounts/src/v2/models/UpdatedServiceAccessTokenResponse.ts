import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdatedServiceAccessToken } from "./UpdatedServiceAccessToken";

/**
 * Response for updating an access token.
 */
export class UpdatedServiceAccessTokenResponse {
  /**
   * Datadog access token returned by the update endpoint.
   */
  "data": UpdatedServiceAccessToken;
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
      type: "UpdatedServiceAccessToken",
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
    return UpdatedServiceAccessTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
