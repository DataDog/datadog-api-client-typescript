import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserRelationshipData } from "./UserRelationshipData";

/**
 * Relationship to user
 */
export class ProjectFavoriteUserRelationship {
  /**
   * Relationship to user object.
   */
  "data": UserRelationshipData;
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
      type: "UserRelationshipData",
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
    return ProjectFavoriteUserRelationship.attributeTypeMap;
  }

  public constructor() {}
}
