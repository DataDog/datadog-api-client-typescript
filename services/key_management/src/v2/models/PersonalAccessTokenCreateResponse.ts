import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FullPersonalAccessToken } from "./FullPersonalAccessToken";

/**
 * Response for creating an access token. Includes the token key.
 */
export class PersonalAccessTokenCreateResponse {
  /**
   * Datadog access token, including the token key.
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
    return PersonalAccessTokenCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
