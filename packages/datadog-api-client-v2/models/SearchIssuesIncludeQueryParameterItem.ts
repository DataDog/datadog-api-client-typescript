/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Relationship object that should be included in the search response.
 */

export type SearchIssuesIncludeQueryParameterItem =
  | typeof ISSUE
  | typeof ISSUE_ASSIGNEE
  | typeof ISSUE_CASE
  | typeof ISSUE_TEAM_OWNERS
  | UnparsedObject;
export const ISSUE = "issue";
export const ISSUE_ASSIGNEE = "issue.assignee";
export const ISSUE_CASE = "issue.case";
export const ISSUE_TEAM_OWNERS = "issue.team_owners";
