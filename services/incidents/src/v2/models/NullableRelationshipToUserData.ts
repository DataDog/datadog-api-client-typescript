import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsersType } from "./UsersType";

/**
 * Relationship to user object.
 */
export class NullableRelationshipToUserData {
  /**
   * A unique identifier that represents the user.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": UsersType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UsersType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NullableRelationshipToUserData.attributeTypeMap;
  }

  public constructor() {}
}
