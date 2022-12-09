/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Data source for event platform-based queries.
 */

export type FormulaAndFunctionEventsDataSource =
  | typeof LOGS
  | typeof SPANS
  | typeof NETWORK
  | typeof RUM
  | typeof SECURITY_SIGNALS
  | typeof PROFILES
  | typeof AUDIT
  | typeof EVENTS
  | typeof CI_TESTS
  | UnparsedObject;
export const LOGS = "logs";
export const SPANS = "spans";
export const NETWORK = "network";
export const RUM = "rum";
export const SECURITY_SIGNALS = "security_signals";
export const PROFILES = "profiles";
export const AUDIT = "audit";
export const EVENTS = "events";
export const CI_TESTS = "ci_tests";
