import { UnparsedObject } from "@datadog/datadog-api-client";

import { Issue } from "./Issue";
import { IssueCase } from "./IssueCase";
import { IssueTeam } from "./IssueTeam";
import { IssueUser } from "./IssueUser";

/**
 * An array of related resources, returned when the `include` query parameter is used.
 */
export type IssuesSearchResultIncluded =
  | Issue
  | IssueCase
  | IssueUser
  | IssueTeam
  | UnparsedObject;
