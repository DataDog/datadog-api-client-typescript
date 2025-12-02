import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseManagementProject } from "./CaseManagementProject";
import { Findings } from "./Findings";

/**
 * Relationships of the case to create.
 */
export class CreateCaseRequestDataRelationships {
  /**
   * A list of security findings.
   */
  "findings": Findings;
  /**
   * Case management project.
   */
  "project": CaseManagementProject;
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
    findings: {
      baseName: "findings",
      type: "Findings",
      required: true,
    },
    project: {
      baseName: "project",
      type: "CaseManagementProject",
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
    return CreateCaseRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
