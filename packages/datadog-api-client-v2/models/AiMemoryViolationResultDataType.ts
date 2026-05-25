/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AI memory violation result resource type.
 */

export type AiMemoryViolationResultDataType =
  | typeof AI_MEMORY_VIOLATION_RESULT
  | UnparsedObject;
export const AI_MEMORY_VIOLATION_RESULT = "ai_memory_violation_result";
