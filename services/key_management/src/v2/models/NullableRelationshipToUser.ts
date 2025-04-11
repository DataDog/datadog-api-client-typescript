import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";

/**
 * Relationship to user.
 */
export class NullableRelationshipToUser {
  /**
   * Relationship to user object.
   */
  "data": NullableRelationshipToUserData | null;
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
      type: "NullableRelationshipToUserData",
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
    return NullableRelationshipToUser.attributeTypeMap;
  }

  public constructor() {}
}
