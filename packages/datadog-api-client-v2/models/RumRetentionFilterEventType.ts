/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of RUM events to filter on.
 */

export type RumRetentionFilterEventType =
  | typeof SESSION
  | typeof VIEW
  | typeof ACTION
  | typeof ERROR
  | typeof RESOURCE
  | typeof LONG_TASK
  | typeof VITAL
  | UnparsedObject;
export const SESSION = "session";
export const VIEW = "view";
export const ACTION = "action";
export const ERROR = "error";
export const RESOURCE = "resource";
export const LONG_TASK = "long_task";
export const VITAL = "vital";
