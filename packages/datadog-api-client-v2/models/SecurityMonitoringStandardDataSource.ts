/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Source of events, either logs, audit trail, or Datadog events.
 */

export type SecurityMonitoringStandardDataSource =
  | typeof LOGS
  | typeof AUDIT
  | typeof APP_SEC_SPANS
  | typeof SPANS
  | typeof SECURITY_RUNTIME
  | typeof NETWORK
  | typeof EVENTS
  | UnparsedObject;
export const LOGS = "logs";
export const AUDIT = "audit";
export const APP_SEC_SPANS = "app_sec_spans";
export const SPANS = "spans";
export const SECURITY_RUNTIME = "security_runtime";
export const NETWORK = "network";
export const EVENTS = "events";
