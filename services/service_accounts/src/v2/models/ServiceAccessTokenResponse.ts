import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccessTokenResponseIncludedItem } from "./AccessTokenResponseIncludedItem";
import { ServiceAccessToken } from "./ServiceAccessToken";

/**
 * Response for retrieving an access token.
 */
export class ServiceAccessTokenResponse {
  /**
   * Datadog access token.
   */
  "data"?: ServiceAccessToken;
  /**
   * Array of objects related to the access tokens.
   */
  "included"?: Array<AccessTokenResponseIncludedItem>;
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
      type: "ServiceAccessToken",
    },
    included: {
      baseName: "included",
      type: "Array<AccessTokenResponseIncludedItem>",
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
    return ServiceAccessTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
