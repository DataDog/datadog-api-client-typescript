import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserRelationshipData } from "./UserRelationshipData";

/**
 * Relationship to users.
 */
export class UsersRelationship {
  /**
   * Relationships to user objects.
   */
  "data": Array<UserRelationshipData>;
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
      type: "Array<UserRelationshipData>",
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
    return UsersRelationship.attributeTypeMap;
  }

  public constructor() {}
}
