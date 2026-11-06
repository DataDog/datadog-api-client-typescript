/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Batch discovery state. QUEUED indicates that the request is waiting for processing capacity.
 */

export type RumRecoveryDiscoveryStatus =
  | typeof QUEUED
  | typeof PENDING
  | typeof SLICING
  | typeof DISCOVERED
  | typeof PROCESSING
  | typeof COMPLETED
  | typeof FAILED
  | typeof CANCELLED
  | UnparsedObject;
export const QUEUED = "QUEUED";
export const PENDING = "PENDING";
export const SLICING = "SLICING";
export const DISCOVERED = "DISCOVERED";
export const PROCESSING = "PROCESSING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
export const CANCELLED = "CANCELLED";
