import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatDelegatedUserData } from "./GoogleChatDelegatedUserData";

/**
 * Response containing a Google Chat delegated user.
 */
export class GoogleChatDelegatedUserResponse {
  /**
   * Google Chat delegated user data from a response.
   */
  "data": GoogleChatDelegatedUserData;
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
      type: "GoogleChatDelegatedUserData",
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
    return GoogleChatDelegatedUserResponse.attributeTypeMap;
  }

  public constructor() {}
}
