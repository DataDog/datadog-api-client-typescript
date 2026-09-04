/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Current execution status for a named query.
 */

export type TimeseriesAnomalyInvestigationQueryExecutionStatus =
  | typeof RUNNING
  | typeof DONE
  | UnparsedObject;
export const RUNNING = "running";
export const DONE = "done";
