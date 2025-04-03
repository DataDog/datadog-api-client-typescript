import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectRelationshipData } from "./ProjectRelationshipData";

/**
 * Relationship to project
 */
export class ProjectRelationship {
  /**
   * Relationship to project object
   */
  "data": ProjectRelationshipData;
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
      type: "ProjectRelationshipData",
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
    return ProjectRelationship.attributeTypeMap;
  }

  public constructor() {}
}
