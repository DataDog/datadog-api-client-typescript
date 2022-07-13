/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type SyntheticsTestExecutionRule =
  | typeof BLOCKING
  | typeof NON_BLOCKING
  | typeof SKIPPED;
export const BLOCKING = "blocking";
export const NON_BLOCKING = "non_blocking";
export const SKIPPED = "skipped";
