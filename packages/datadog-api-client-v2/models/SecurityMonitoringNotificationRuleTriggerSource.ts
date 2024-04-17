/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the evaluation result (Signal or Finding).
 */

export type SecurityMonitoringNotificationRuleTriggerSource =
  | typeof SECURITY_SIGNALS
  | typeof SECURITY_FINDINGS
  | UnparsedObject;
export const SECURITY_SIGNALS = "security_signals";
export const SECURITY_FINDINGS = "security_findings";
