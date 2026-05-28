import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccessTokenListItemRelationships } from "./AccessTokenListItemRelationships";
import { AccessTokensType } from "./AccessTokensType";
import { PersonalAccessTokenAttributes } from "./PersonalAccessTokenAttributes";

/**
 * An access token entry returned by the personal access tokens list endpoint. May represent either a personal or a service access token.
 */
export class AccessTokenListItem {
  /**
   * Attributes of an access token.
   */
  "attributes"?: PersonalAccessTokenAttributes;
  /**
   * ID of the access token.
   */
  "id"?: string;
  /**
   * Resources related to the access token entry in the mixed list response.
   */
  "relationships"?: AccessTokenListItemRelationships;
  /**
   * Resource type returned by the access tokens list endpoint. Includes both personal and service access tokens.
   */
  "type"?: AccessTokensType;
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
      type: "PersonalAccessTokenAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "AccessTokenListItemRelationships",
    },
    type: {
      baseName: "type",
      type: "AccessTokensType",
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
    return AccessTokenListItem.attributeTypeMap;
  }

  public constructor() {}
}
