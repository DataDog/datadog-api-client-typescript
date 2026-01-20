/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type identifier for Jira issue template resources
 */

export type JiraIssueTemplateType = typeof JIRA_ISSUE_TEMPLATE | UnparsedObject;
export const JIRA_ISSUE_TEMPLATE = "jira-issue-template";
