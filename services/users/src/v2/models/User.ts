import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UsersType } from "./UsersType";

/**
 * User object returned by the API.
 */
export class User {
  /**
   * Attributes of user object returned by the API.
   */
  "attributes"?: UserAttributes;
  /**
   * ID of the user.
   */
  "id"?: string;
  /**
   * Relationships of the user object returned by the API.
   */
  "relationships"?: UserResponseRelationships;
  /**
   * Users resource type.
   */
  "type"?: UsersType;
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
      type: "UserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "UserResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "UsersType",
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
    return User.attributeTypeMap;
  }

  public constructor() {}
}
