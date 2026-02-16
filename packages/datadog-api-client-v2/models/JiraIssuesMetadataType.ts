/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Jira issues metadata resource type.
 */

export type JiraIssuesMetadataType = typeof JIRA_ISSUES | UnparsedObject;
export const JIRA_ISSUES = "jira_issues";
