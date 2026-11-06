/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Session availability or recovery state. `RECOVERED` indicates that the session is ready to query.
 */

export type RumRecoverySessionStatus =
  | typeof AVAILABLE
  | typeof PENDING
  | typeof PROCESSING
  | typeof RECOVERED
  | typeof FAILED
  | typeof RETAINED
  | typeof EXPIRED
  | typeof CANCELLED
  | UnparsedObject;
export const AVAILABLE = "AVAILABLE";
export const PENDING = "PENDING";
export const PROCESSING = "PROCESSING";
export const RECOVERED = "RECOVERED";
export const FAILED = "FAILED";
export const RETAINED = "RETAINED";
export const EXPIRED = "EXPIRED";
export const CANCELLED = "CANCELLED";
