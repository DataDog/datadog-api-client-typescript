import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NullableUserRelationship } from "./NullableUserRelationship";
import { ProjectRelationship } from "./ProjectRelationship";

/**
 * Relationships formed with the case on creation
 */
export class CaseCreateRelationships {
  /**
   * Relationship to user.
   */
  "assignee"?: NullableUserRelationship;
  /**
   * Relationship to project
   */
  "project": ProjectRelationship;
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
    assignee: {
      baseName: "assignee",
      type: "NullableUserRelationship",
    },
    project: {
      baseName: "project",
      type: "ProjectRelationship",
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
    return CaseCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
