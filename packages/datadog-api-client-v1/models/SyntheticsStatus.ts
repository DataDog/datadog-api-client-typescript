/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Determines whether or not the batch has passed, failed, or is in progress.
 */

export type SyntheticsStatus =
  | typeof PASSED
  | typeof skipped
  | typeof failed
  | UnparsedObject;
export const PASSED = "passed";
export const skipped = "skipped";
export const failed = "failed";
