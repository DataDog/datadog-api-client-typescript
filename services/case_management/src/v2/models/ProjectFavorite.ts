import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectFavoriteRelationships } from "./ProjectFavoriteRelationships";
import { ProjectFavoriteResourceType } from "./ProjectFavoriteResourceType";

/**
 * Project favorite
 */
export class ProjectFavorite {
  /**
   * The project's identifier
   */
  "id": string;
  /**
   * Project favorite relationships
   */
  "relationships": ProjectFavoriteRelationships;
  /**
   * Project favorite resource type
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
    relationships: {
      baseName: "relationships",
      type: "ProjectFavoriteRelationships",
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
