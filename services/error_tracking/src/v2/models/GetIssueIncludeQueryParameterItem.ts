import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Relationship object that should be included in the response.
 */
export type GetIssueIncludeQueryParameterItem =
  | typeof ASSIGNEE
  | typeof BITS_INVESTIGATION
  | typeof CASE
  | typeof PULL_REQUESTS
  | typeof SAMPLES
  | typeof TEAM_OWNERS
  | typeof WATCHES
  | UnparsedObject;
export const ASSIGNEE = "assignee";
export const BITS_INVESTIGATION = "bits_investigation";
export const CASE = "case";
export const PULL_REQUESTS = "pull_requests";
export const SAMPLES = "samples";
export const TEAM_OWNERS = "team_owners";
export const WATCHES = "watches";
