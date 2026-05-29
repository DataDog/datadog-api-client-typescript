import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToAccessTokenOwnerData } from "./RelationshipToAccessTokenOwnerData";

/**
 * Relationship to the access token's owner.
 */
export class RelationshipToAccessTokenOwner {
  /**
   * Relationship to the access token's owner.
   */
  "data": RelationshipToAccessTokenOwnerData;
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
      type: "RelationshipToAccessTokenOwnerData",
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
    return RelationshipToAccessTokenOwner.attributeTypeMap;
  }

  public constructor() {}
}
