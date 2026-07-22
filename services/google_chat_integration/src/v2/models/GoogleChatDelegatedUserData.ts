import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatDelegatedUserAttributes } from "./GoogleChatDelegatedUserAttributes";
import { GoogleChatDelegatedUserType } from "./GoogleChatDelegatedUserType";

/**
 * Google Chat delegated user data from a response.
 */
export class GoogleChatDelegatedUserData {
  /**
   * Google Chat delegated user attributes.
   */
  "attributes"?: GoogleChatDelegatedUserAttributes;
  /**
   * The ID of the delegated user.
   */
  "id"?: string;
  /**
   * Google Chat delegated user resource type.
   */
  "type"?: GoogleChatDelegatedUserType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "GoogleChatDelegatedUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GoogleChatDelegatedUserType",
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
    return GoogleChatDelegatedUserData.attributeTypeMap;
  }

  public constructor() {}
}
