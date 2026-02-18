import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FullPersonalAccessToken } from "./FullPersonalAccessToken";

/**
 * Response for creating a personal access token.
 */
export class PersonalAccessTokenResponse {
  /**
   * Personal access token object with the secret key value. This is only
   * returned when creating a new token.
   */
  "data"?: FullPersonalAccessToken;
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
      type: "FullPersonalAccessToken",
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
    return PersonalAccessTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
