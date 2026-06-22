/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Plan status.
 */

export type RemediationPlanStatus =
  | typeof PENDING
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const PENDING = "pending";
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
export const FAILED = "failed";
