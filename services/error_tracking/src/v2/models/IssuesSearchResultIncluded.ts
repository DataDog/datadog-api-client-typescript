import { UnparsedObject } from "@datadog/datadog-api-client";

import { Case } from "./Case";
import { Issue } from "./Issue";
import { IssueTeam } from "./IssueTeam";
import { IssueUser } from "./IssueUser";

/**
 * An array of related resources, returned when the `include` query parameter is used.
 */
export type IssuesSearchResultIncluded =
  | Issue
  | Case
  | IssueUser
  | IssueTeam
  | UnparsedObject;
