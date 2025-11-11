/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Restriction query resource type.
 */

export type LogsRestrictionQueriesType =
  | typeof LOGS_RESTRICTION_QUERIES
  | UnparsedObject;
export const LOGS_RESTRICTION_QUERIES = "logs_restriction_queries";
