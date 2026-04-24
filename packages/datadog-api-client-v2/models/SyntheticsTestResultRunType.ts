/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of run for a Synthetic test result.
 */

export type SyntheticsTestResultRunType =
  | typeof SCHEDULED
  | typeof FAST
  | typeof CI
  | typeof TRIGGERED
  | UnparsedObject;
export const SCHEDULED = "scheduled";
export const FAST = "fast";
export const CI = "ci";
export const TRIGGERED = "triggered";
