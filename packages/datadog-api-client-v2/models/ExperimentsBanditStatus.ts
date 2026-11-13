/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The bandit's status. STOPPED means the bandit was stopped and serves the variant chosen then. COMPLETED means it reached its scheduled end and serves its fallback.
 */

export type ExperimentsBanditStatus =
  | typeof DRAFT
  | typeof SCHEDULED
  | typeof RUNNING
  | typeof PAUSED
  | typeof STOPPED
  | typeof COMPLETED
  | UnparsedObject;
export const DRAFT = "DRAFT";
export const SCHEDULED = "SCHEDULED";
export const RUNNING = "RUNNING";
export const PAUSED = "PAUSED";
export const STOPPED = "STOPPED";
export const COMPLETED = "COMPLETED";
