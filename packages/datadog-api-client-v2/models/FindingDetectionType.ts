/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The detection type of the finding.
 */

export type FindingDetectionType =
  | typeof MISCONFIGURATION
  | typeof ATTACK_PATH
  | typeof IDENTITY_RISK
  | typeof API_SECURITY
  | UnparsedObject;
export const MISCONFIGURATION = "misconfiguration";
export const ATTACK_PATH = "attack_path";
export const IDENTITY_RISK = "identity_risk";
export const API_SECURITY = "api_security";
