import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserCreateAttributes } from "./UserCreateAttributes";
import { UserRelationships } from "./UserRelationships";
import { UsersType } from "./UsersType";

/**
 * Object to create a user.
 */
export class UserCreateData {
  /**
   * Attributes of the created user.
   */
  "attributes": UserCreateAttributes;
  /**
   * Relationships of the user object.
   */
  "relationships"?: UserRelationships;
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
    attributes: {
      baseName: "attributes",
      type: "UserCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UserRelationships",
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
    return UserCreateData.attributeTypeMap;
  }

  public constructor() {}
}
