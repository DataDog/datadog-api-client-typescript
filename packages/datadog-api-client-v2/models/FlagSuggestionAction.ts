/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of change action for a suggestion.
 */

export type FlagSuggestionAction =
  | typeof CREATED
  | typeof UPDATED
  | typeof DELETED
  | typeof ARCHIVED
  | typeof UNARCHIVED
  | typeof STARTED
  | typeof STOPPED
  | typeof PAUSED
  | typeof UNPAUSED
  | UnparsedObject;
export const CREATED = "created";
export const UPDATED = "updated";
export const DELETED = "deleted";
export const ARCHIVED = "archived";
export const UNARCHIVED = "unarchived";
export const STARTED = "started";
export const STOPPED = "stopped";
export const PAUSED = "paused";
export const UNPAUSED = "unpaused";
