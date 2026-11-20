/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type TableColumnModifierName =
  | typeof FILL
  | typeof AS_COUNT
  | typeof AS_RATE
  | typeof WEIGHTED
  | typeof ROLLUP
  | UnparsedObject;
export const FILL = "fill";
export const AS_COUNT = "as_count";
export const AS_RATE = "as_rate";
export const WEIGHTED = "weighted";
export const ROLLUP = "rollup";
