import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToAccessTokenOwner } from "./RelationshipToAccessTokenOwner";

/**
 * Resources related to the access token entry in the mixed list response.
 */
export class AccessTokenListItemRelationships {
  /**
   * Relationship to the access token's owner.
   */
  "ownedBy"?: RelationshipToAccessTokenOwner;
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
    ownedBy: {
      baseName: "owned_by",
      type: "RelationshipToAccessTokenOwner",
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
    return AccessTokenListItemRelationships.attributeTypeMap;
  }

  public constructor() {}
}
