/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source of the anonymous assignee.
 */

export type IncidentTodoAnonymousAssigneeSource =
  | typeof SLACK
  | typeof MICROSOFT_TEAMS
  | UnparsedObject;
export const SLACK = "slack";
export const MICROSOFT_TEAMS = "microsoft_teams";
