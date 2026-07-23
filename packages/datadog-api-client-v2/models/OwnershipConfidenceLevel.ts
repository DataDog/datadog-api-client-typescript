/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The ownership confidence level.
 */

export type OwnershipConfidenceLevel =
  | typeof HIGH
  | typeof MEDIUM
  | typeof LOW
  | UnparsedObject;
export const HIGH = "high";
export const MEDIUM = "medium";
export const LOW = "low";
