/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Health status of the device, computed from its issues and recent telemetry.
 * `inactive` means the device stopped reporting. `unknown` means no telemetry is available yet.
 */

export type DeviceStatus =
  | typeof HEALTHY
  | typeof DEGRADED
  | typeof CRITICAL
  | typeof INACTIVE
  | typeof UNKNOWN
  | UnparsedObject;
export const HEALTHY = "healthy";
export const DEGRADED = "degraded";
export const CRITICAL = "critical";
export const INACTIVE = "inactive";
export const UNKNOWN = "unknown";
