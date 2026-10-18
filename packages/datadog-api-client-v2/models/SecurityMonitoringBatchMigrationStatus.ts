/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of a batch migration. A batch migration is created as `draft` and moves to
 * `in_progress` when started. It moves to `completed` once no resource is `pending` or
 * `in_progress`, or to `canceled` when canceled.
 */

export type SecurityMonitoringBatchMigrationStatus =
  | typeof DRAFT
  | typeof IN_PROGRESS
  | typeof CANCELED
  | typeof COMPLETED
  | UnparsedObject;
export const DRAFT = "draft";
export const IN_PROGRESS = "in_progress";
export const CANCELED = "canceled";
export const COMPLETED = "completed";
