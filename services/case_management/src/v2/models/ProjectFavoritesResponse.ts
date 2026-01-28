import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectFavorite } from "./ProjectFavorite";

/**
 * Response with project favorites
 */
export class ProjectFavoritesResponse {
  /**
   * Array of project favorites
   */
  "data": Array<ProjectFavorite>;
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
      type: "Array<ProjectFavorite>",
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
    return ProjectFavoritesResponse.attributeTypeMap;
  }

  public constructor() {}
}
