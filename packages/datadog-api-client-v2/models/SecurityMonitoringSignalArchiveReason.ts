/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Reason a signal is archived.
 */

export type SecurityMonitoringSignalArchiveReason =
  | typeof NONE
  | typeof FALSE_POSITIVE
  | typeof TESTING_OR_MAINTENANCE
  | typeof INVESTIGATED_CASE_OPENED
  | typeof TRUE_POSITIVE_BENIGN
  | typeof TRUE_POSITIVE_MALICIOUS
  | typeof OTHER
  | UnparsedObject;
export const NONE = "none";
export const FALSE_POSITIVE = "false_positive";
export const TESTING_OR_MAINTENANCE = "testing_or_maintenance";
export const INVESTIGATED_CASE_OPENED = "investigated_case_opened";
export const TRUE_POSITIVE_BENIGN = "true_positive_benign";
export const TRUE_POSITIVE_MALICIOUS = "true_positive_malicious";
export const OTHER = "other";
