import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FullServiceAccessTokenAttributes } from "./FullServiceAccessTokenAttributes";
import { ServiceAccessTokenRelationships } from "./ServiceAccessTokenRelationships";
import { ServiceAccessTokensType } from "./ServiceAccessTokensType";

/**
 * Datadog access token, including the token key.
 */
export class FullServiceAccessToken {
  /**
   * Attributes of a full access token, including the token key.
   */
  "attributes"?: FullServiceAccessTokenAttributes;
  /**
   * ID of the access token.
   */
  "id"?: string;
  /**
   * Resources related to the access token.
   */
  "relationships"?: ServiceAccessTokenRelationships;
  /**
   * Service access tokens resource type.
   */
  "type"?: ServiceAccessTokensType;
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
    attributes: {
      baseName: "attributes",
      type: "FullServiceAccessTokenAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ServiceAccessTokenRelationships",
    },
    type: {
      baseName: "type",
      type: "ServiceAccessTokensType",
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
    return FullServiceAccessToken.attributeTypeMap;
  }

  public constructor() {}
}
