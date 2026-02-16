/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Jira issue resource type.
 */

export type JiraIssueType = typeof JIRA_ISSUE | UnparsedObject;
export const JIRA_ISSUE = "jira_issue";
