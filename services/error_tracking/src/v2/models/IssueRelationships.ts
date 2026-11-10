import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueAssigneeRelationship } from "./IssueAssigneeRelationship";
import { IssueBitsInvestigationRelationship } from "./IssueBitsInvestigationRelationship";
import { IssueCaseRelationship } from "./IssueCaseRelationship";
import { IssuePullRequestsRelationship } from "./IssuePullRequestsRelationship";
import { IssueSamplesRelationship } from "./IssueSamplesRelationship";
import { IssueTeamOwnersRelationship } from "./IssueTeamOwnersRelationship";
import { IssueWatchesRelationship } from "./IssueWatchesRelationship";

/**
 * Relationship between the issue and other resources, such as an assignee, case, teams, pull requests, watches, samples, or a Bits AI investigation.
 */
export class IssueRelationships {
  /**
   * Relationship between the issue and assignee.
   */
  "assignee"?: IssueAssigneeRelationship;
  /**
   * Bits AI investigation linked to the issue, returned when `bits_investigation` is requested
   * in the `include` query parameter.
   */
  "bitsInvestigation"?: IssueBitsInvestigationRelationship;
  /**
   * Relationship between the issue and case.
   */
  "_case"?: IssueCaseRelationship;
  /**
   * Relationship between the issue and its linked pull requests. Returned when `pull_requests` is included and the issue has linked pull requests.
   */
  "pullRequests"?: IssuePullRequestsRelationship;
  /**
   * Relationship between the issue and its curated error samples.
   */
  "samples"?: IssueSamplesRelationship;
  /**
   * Relationship between the issue and teams.
   */
  "teamOwners"?: IssueTeamOwnersRelationship;
  /**
   * Relationship between the issue and its active watches. Returned when `watches` is included and the issue has an active watch.
   */
  "watches"?: IssueWatchesRelationship;
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
    bitsInvestigation: {
      baseName: "bits_investigation",
      type: "IssueBitsInvestigationRelationship",
    },
    _case: {
      baseName: "case",
      type: "IssueCaseRelationship",
    },
    pullRequests: {
      baseName: "pull_requests",
      type: "IssuePullRequestsRelationship",
    },
    samples: {
      baseName: "samples",
      type: "IssueSamplesRelationship",
    },
    teamOwners: {
      baseName: "team_owners",
      type: "IssueTeamOwnersRelationship",
    },
    watches: {
      baseName: "watches",
      type: "IssueWatchesRelationship",
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
