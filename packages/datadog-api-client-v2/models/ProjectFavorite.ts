/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectFavoriteResourceType } from "./ProjectFavoriteResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
