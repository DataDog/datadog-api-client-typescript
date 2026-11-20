/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type ChangeDirectionality =
  | typeof INCREASE_BETTER
  | typeof DECREASE_BETTER
  | typeof NEUTRAL
  | UnparsedObject;
export const INCREASE_BETTER = "increase_better";
export const DECREASE_BETTER = "decrease_better";
export const NEUTRAL = "neutral";
