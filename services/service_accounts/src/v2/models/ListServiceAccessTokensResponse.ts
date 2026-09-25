import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccessTokenResponseIncludedItem } from "./AccessTokenResponseIncludedItem";
import { ServiceAccessToken } from "./ServiceAccessToken";
import { ServiceAccessTokenResponseMeta } from "./ServiceAccessTokenResponseMeta";

/**
 * Response for a list of access tokens.
 */
export class ListServiceAccessTokensResponse {
  /**
   * Array of access tokens.
   */
  "data"?: Array<ServiceAccessToken>;
  /**
   * Array of objects related to the access tokens.
   */
  "included"?: Array<AccessTokenResponseIncludedItem>;
  /**
   * Additional information related to the access token response.
   */
  "meta"?: ServiceAccessTokenResponseMeta;
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
      type: "Array<ServiceAccessToken>",
    },
    included: {
      baseName: "included",
      type: "Array<AccessTokenResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "ServiceAccessTokenResponseMeta",
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
    return ListServiceAccessTokensResponse.attributeTypeMap;
  }

  public constructor() {}
}
