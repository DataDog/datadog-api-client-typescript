import { UnparsedObject } from "@datadog/datadog-api-client";

import { IssueCase } from "./IssueCase";
import { IssueSample } from "./IssueSample";
import { IssueTeam } from "./IssueTeam";
import { IssueUser } from "./IssueUser";

/**
 * An array of related resources, returned when the `include` query parameter is used.
 */
export type IssueIncluded =
  | IssueCase
  | IssueUser
  | IssueTeam
  | IssueSample
  | UnparsedObject;
