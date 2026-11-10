import { UnparsedObject } from "@datadog/datadog-api-client";

import { Issue } from "./Issue";
import { IssueCase } from "./IssueCase";
import { IssuePullRequest } from "./IssuePullRequest";
import { IssueTeam } from "./IssueTeam";
import { IssueUser } from "./IssueUser";
import { IssueWatch } from "./IssueWatch";

/**
 * An array of related resources, returned when the `include` query parameter is used.
 */
export type IssuesSearchResultIncluded =
  | Issue
  | IssueCase
  | IssueUser
  | IssueTeam
  | IssuePullRequest
  | IssueWatch
  | UnparsedObject;
