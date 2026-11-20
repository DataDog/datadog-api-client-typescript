/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type LogsIssueStreamQueryDataSource =
  | typeof LOGS_ISSUE_STREAM
  | UnparsedObject;
export const LOGS_ISSUE_STREAM = "logs_issue_stream";
