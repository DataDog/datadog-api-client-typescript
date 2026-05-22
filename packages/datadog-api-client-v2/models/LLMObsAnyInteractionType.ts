/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of an annotated interaction.
 */

export type LLMObsAnyInteractionType =
  | typeof TRACE
  | typeof EXPERIMENT_TRACE
  | typeof SESSION
  | typeof DISPLAY_BLOCK
  | UnparsedObject;
export const TRACE = "trace";
export const EXPERIMENT_TRACE = "experiment_trace";
export const SESSION = "session";
export const DISPLAY_BLOCK = "display_block";
