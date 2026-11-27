/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of target whose scanning groups are served by the target-scoped group routes. `llm_observability` is Agent Observability, `ai_guard` is AI Guard.
 */

export type SensitiveDataScannerGroupTargetType =
  | typeof LLM_OBSERVABILITY
  | typeof AI_GUARD
  | UnparsedObject;
export const LLM_OBSERVABILITY = "llm_observability";
export const AI_GUARD = "ai_guard";
