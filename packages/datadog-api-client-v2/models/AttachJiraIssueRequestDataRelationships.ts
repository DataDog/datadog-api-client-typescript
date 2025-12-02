/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseManagementProject } from "./CaseManagementProject";
import { Findings } from "./Findings";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the Jira issue to attach security findings to.
 */
export class AttachJiraIssueRequestDataRelationships {
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
    return AttachJiraIssueRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
