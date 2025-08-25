/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Source from which to query items to display in the stream.
 */

export type ListStreamSource =
  | typeof LOGS_STREAM
  | typeof AUDIT_STREAM
  | typeof CI_PIPELINE_STREAM
  | typeof CI_TEST_STREAM
  | typeof RUM_ISSUE_STREAM
  | typeof APM_ISSUE_STREAM
  | typeof TRACE_STREAM
  | typeof LOGS_ISSUE_STREAM
  | typeof LOGS_PATTERN_STREAM
  | typeof LOGS_TRANSACTION_STREAM
  | typeof EVENT_STREAM
  | typeof RUM_STREAM
  | typeof LLM_OBSERVABILITY_STREAM
  | UnparsedObject;
export const LOGS_STREAM = "logs_stream";
export const AUDIT_STREAM = "audit_stream";
export const CI_PIPELINE_STREAM = "ci_pipeline_stream";
export const CI_TEST_STREAM = "ci_test_stream";
export const RUM_ISSUE_STREAM = "rum_issue_stream";
export const APM_ISSUE_STREAM = "apm_issue_stream";
export const TRACE_STREAM = "trace_stream";
export const LOGS_ISSUE_STREAM = "logs_issue_stream";
export const LOGS_PATTERN_STREAM = "logs_pattern_stream";
export const LOGS_TRANSACTION_STREAM = "logs_transaction_stream";
export const EVENT_STREAM = "event_stream";
export const RUM_STREAM = "rum_stream";
export const LLM_OBSERVABILITY_STREAM = "llm_observability_stream";
