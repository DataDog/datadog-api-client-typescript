/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the refresh.
 */

export type ExperimentsBanditRefreshStatus =
  | typeof PENDING
  | typeof RUNNING
  | typeof SUCCEEDED
  | typeof FAILED
  | typeof CANCELLED
  | UnparsedObject;
export const PENDING = "PENDING";
export const RUNNING = "RUNNING";
export const SUCCEEDED = "SUCCEEDED";
export const FAILED = "FAILED";
export const CANCELLED = "CANCELLED";
