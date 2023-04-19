/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the finding.
 */

export type FindingStatus =
  | typeof CRITICAL
  | typeof HIGH
  | typeof MEDIUM
  | typeof LOW
  | typeof INFO
  | UnparsedObject;
export const CRITICAL = "critical";
export const HIGH = "high";
export const MEDIUM = "medium";
export const LOW = "low";
export const INFO = "info";
