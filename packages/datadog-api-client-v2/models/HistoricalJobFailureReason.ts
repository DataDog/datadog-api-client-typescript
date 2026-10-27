/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The reason why the job failed.
 */

export type HistoricalJobFailureReason =
  | typeof RULE_CONFIGURATION
  | typeof QUERY_TOO_EXPENSIVE
  | typeof INTERNAL_ERROR
  | UnparsedObject;
export const RULE_CONFIGURATION = "rule_configuration";
export const QUERY_TOO_EXPENSIVE = "query_too_expensive";
export const INTERNAL_ERROR = "internal_error";
