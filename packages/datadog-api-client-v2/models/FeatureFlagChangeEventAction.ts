/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The kind of change.
 */

export type FeatureFlagChangeEventAction =
  | typeof CREATED
  | typeof UPDATED
  | typeof DELETED
  | typeof ARCHIVED
  | typeof UNARCHIVED
  | typeof SCHEDULED
  | typeof STARTED
  | typeof PAUSED
  | typeof UNPAUSED
  | typeof STOPPED
  | UnparsedObject;
export const CREATED = "created";
export const UPDATED = "updated";
export const DELETED = "deleted";
export const ARCHIVED = "archived";
export const UNARCHIVED = "unarchived";
export const SCHEDULED = "scheduled";
export const STARTED = "started";
export const PAUSED = "paused";
export const UNPAUSED = "unpaused";
export const STOPPED = "stopped";
