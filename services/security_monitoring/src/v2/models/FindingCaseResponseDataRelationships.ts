import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseManagementProject } from "./CaseManagementProject";
import { RelationshipToUser } from "./RelationshipToUser";

/**
 * Relationships of the case.
 */
export class FindingCaseResponseDataRelationships {
  /**
   * Relationship to user.
   */
  "createdBy"?: RelationshipToUser;
  /**
   * Relationship to user.
   */
  "modifiedBy"?: RelationshipToUser;
  /**
   * Case management project.
   */
  "project"?: CaseManagementProject;
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
    createdBy: {
      baseName: "created_by",
      type: "RelationshipToUser",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "RelationshipToUser",
    },
    project: {
      baseName: "project",
      type: "CaseManagementProject",
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
    return FindingCaseResponseDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
