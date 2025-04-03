import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectResourceType } from "./ProjectResourceType";

/**
 * Relationship to project object
 */
export class ProjectRelationshipData {
  /**
   * A unique identifier that represents the project
   */
  "id": string;
  /**
   * Project resource type
   */
  "type": ProjectResourceType;
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
      type: "ProjectResourceType",
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
    return ProjectRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
