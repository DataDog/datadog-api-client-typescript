/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Reason a signal is archived.
 */

export type SecurityMonitoringSignalArchiveReason =
  | typeof NONE
  | typeof FALSE_POSITIVE
  | typeof TESTING_OR_MAINTENANCE
  | typeof OTHER;
export const NONE = "none";
export const FALSE_POSITIVE = "false_positive";
export const TESTING_OR_MAINTENANCE = "testing_or_maintenance";
export const OTHER = "other";
