import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessToken } from "./PersonalAccessToken";

/**
 * Response for retrieving a personal access token.
 */
export class PersonalAccessTokenGetResponse {
  /**
   * Personal access token object.
   */
  "data"?: PersonalAccessToken;
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
      type: "PersonalAccessToken",
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
    return PersonalAccessTokenGetResponse.attributeTypeMap;
  }

  public constructor() {}
}
