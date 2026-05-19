/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of a Model Lab run.
 */

export type ModelLabRunStatus =
  | typeof PENDING
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | typeof KILLED
  | typeof UNRESPONSIVE
  | typeof PAUSED
  | UnparsedObject;
export const PENDING = "pending";
export const RUNNING = "running";
export const COMPLETED = "completed";
export const FAILED = "failed";
export const KILLED = "killed";
export const UNRESPONSIVE = "unresponsive";
export const PAUSED = "paused";
