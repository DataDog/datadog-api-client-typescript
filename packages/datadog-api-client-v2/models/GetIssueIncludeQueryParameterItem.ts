/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Relationship object that should be included in the response.
 */

export type GetIssueIncludeQueryParameterItem =
  | typeof ASSIGNEE
  | typeof CASE
  | typeof TEAM_OWNERS
  | UnparsedObject;
export const ASSIGNEE = "assignee";
export const CASE = "case";
export const TEAM_OWNERS = "team_owners";
