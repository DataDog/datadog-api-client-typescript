/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Execution status of an LLM Observability experiment.
 */

export type LLMObsExperimentStatus =
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | typeof INTERRUPTED
  | UnparsedObject;
export const RUNNING = "running";
export const COMPLETED = "completed";
export const FAILED = "failed";
export const INTERRUPTED = "interrupted";
