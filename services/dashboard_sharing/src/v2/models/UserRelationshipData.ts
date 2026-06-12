import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserResourceType } from "./UserResourceType";

/**
 * Relationship to user object.
 */
export class UserRelationshipData {
  /**
   * A unique identifier that represents the user.
   */
  "id": string;
  /**
   * User resource type.
   */
  "type": UserResourceType;
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
      type: "UserResourceType",
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
    return UserRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
