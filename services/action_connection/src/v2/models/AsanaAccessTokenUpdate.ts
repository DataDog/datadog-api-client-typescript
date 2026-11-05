import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AsanaAccessTokenType } from "./AsanaAccessTokenType";
import { AsanaAccessTokenUpdateAccessToken } from "./AsanaAccessTokenUpdateAccessToken";

/**
 * The definition of the `AsanaAccessToken` object.
 */
export class AsanaAccessTokenUpdate {
  /**
   * The `AsanaAccessTokenUpdate` `access_token`.
   */
  "accessToken"?: AsanaAccessTokenUpdateAccessToken;
  /**
   * The definition of the `AsanaAccessToken` object.
   */
  "type": AsanaAccessTokenType;
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
    accessToken: {
      baseName: "access_token",
      type: "AsanaAccessTokenUpdateAccessToken",
    },
    type: {
      baseName: "type",
      type: "AsanaAccessTokenType",
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
    return AsanaAccessTokenUpdate.attributeTypeMap;
  }

  public constructor() {}
}
