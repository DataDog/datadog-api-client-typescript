/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueAssigneeRelationship } from "./IssueAssigneeRelationship";
import { IssueCaseRelationship } from "./IssueCaseRelationship";
import { IssueTeamOwnersRelationship } from "./IssueTeamOwnersRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between the issue and an assignee, case and/or teams.
 */
export class IssueRelationships {
  /**
   * Relationship between the issue and assignee.
   */
  "assignee"?: IssueAssigneeRelationship;
  /**
   * Relationship between the issue and case.
   */
  "_case"?: IssueCaseRelationship;
  /**
   * Relationship between the issue and teams.
   */
  "teamOwners"?: IssueTeamOwnersRelationship;

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
      type: "IssueAssigneeRelationship",
    },
    _case: {
      baseName: "case",
      type: "IssueCaseRelationship",
    },
    teamOwners: {
      baseName: "team_owners",
      type: "IssueTeamOwnersRelationship",
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
    return IssueRelationships.attributeTypeMap;
  }

  public constructor() {}
}
