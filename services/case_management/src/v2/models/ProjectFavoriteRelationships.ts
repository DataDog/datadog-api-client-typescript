import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectFavoriteUserRelationship } from "./ProjectFavoriteUserRelationship";

/**
 * Project favorite relationships
 */
export class ProjectFavoriteRelationships {
  /**
   * Relationship to user
   */
  "user": ProjectFavoriteUserRelationship;
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
    user: {
      baseName: "user",
      type: "ProjectFavoriteUserRelationship",
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
    return ProjectFavoriteRelationships.attributeTypeMap;
  }

  public constructor() {}
}
