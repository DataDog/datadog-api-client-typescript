import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdatedPersonalAccessToken } from "./UpdatedPersonalAccessToken";

/**
 * Response for updating an access token.
 */
export class UpdatedPersonalAccessTokenResponse {
  /**
   * Datadog access token returned by the update endpoint.
   */
  "data": UpdatedPersonalAccessToken;
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
      type: "UpdatedPersonalAccessToken",
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
    return UpdatedPersonalAccessTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
