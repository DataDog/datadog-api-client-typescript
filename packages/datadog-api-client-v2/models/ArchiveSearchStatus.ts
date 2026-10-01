/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Current state of an Archive Search.
 */

export type ArchiveSearchStatus =
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | typeof CANCELLED
  | typeof QUOTA_REACHED
  | typeof EXPIRED
  | UnparsedObject;
export const RUNNING = "RUNNING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
export const CANCELLED = "CANCELLED";
export const QUOTA_REACHED = "QUOTA_REACHED";
export const EXPIRED = "EXPIRED";
