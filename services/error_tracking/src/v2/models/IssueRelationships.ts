import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueAssigneeRelationship } from "./IssueAssigneeRelationship";
import { IssueCaseRelationship } from "./IssueCaseRelationship";
import { IssueTeamOwnersRelationship } from "./IssueTeamOwnersRelationship";

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
