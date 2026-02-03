/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The verdict from the investigation step.
 */

export type SecurityMonitoringSignalInvestigationStepOutputVerdict =
  | typeof UNSPECIFIED
  | typeof BENIGN
  | typeof SUSPICIOUS
  | typeof INCONCLUSIVE
  | UnparsedObject;
export const UNSPECIFIED = "unspecified";
export const BENIGN = "benign";
export const SUSPICIOUS = "suspicious";
export const INCONCLUSIVE = "inconclusive";
