import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectFavoriteResourceType } from "./ProjectFavoriteResourceType";

/**
 * Represents a case project that the current user has bookmarked for quick access. Favorited projects appear prominently in the Case Management UI.
 */
export class ProjectFavorite {
  /**
   * The UUID of the favorited project.
   */
  "id": string;
  /**
   * JSON:API resource type for project favorites.
   */
  "type": ProjectFavoriteResourceType;
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
      type: "ProjectFavoriteResourceType",
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
    return ProjectFavorite.attributeTypeMap;
  }

  public constructor() {}
}
