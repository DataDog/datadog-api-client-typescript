/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Scope at which to evaluate spans. `trace_fan_out` requires `llm_judge_config.target_query`.
 */

export type LLMObsCustomEvalConfigEvalScope =
  | typeof SPAN
  | typeof TRACE
  | typeof TRACE_FAN_OUT
  | typeof SESSION
  | UnparsedObject;
export const SPAN = "span";
export const TRACE = "trace";
export const TRACE_FAN_OUT = "trace_fan_out";
export const SESSION = "session";
