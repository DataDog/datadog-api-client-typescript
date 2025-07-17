/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Used with the case action of type 'flag_ip'. The value specified in this field is applied as a flag to the IPs addresses.
 */

export type SecurityMonitoringRuleCaseActionOptionsFlaggedIPType =
  | typeof SUSPICIOUS
  | typeof FLAGGED
  | UnparsedObject;
export const SUSPICIOUS = "SUSPICIOUS";
export const FLAGGED = "FLAGGED";
