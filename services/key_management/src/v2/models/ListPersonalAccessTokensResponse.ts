import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccessTokenListItem } from "./AccessTokenListItem";
import { PersonalAccessTokenResponseMeta } from "./PersonalAccessTokenResponseMeta";

/**
 * Response for a list of access tokens. Includes both personal and service access tokens.
 */
export class ListPersonalAccessTokensResponse {
  /**
   * Array of access tokens. Includes both personal and service access tokens.
   */
  "data"?: Array<AccessTokenListItem>;
  /**
   * Additional information related to the access token response.
   */
  "meta"?: PersonalAccessTokenResponseMeta;
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
      type: "Array<AccessTokenListItem>",
    },
    meta: {
      baseName: "meta",
      type: "PersonalAccessTokenResponseMeta",
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
    return ListPersonalAccessTokensResponse.attributeTypeMap;
  }

  public constructor() {}
}
