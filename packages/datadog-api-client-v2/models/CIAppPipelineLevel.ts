/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Pipeline execution level.
 */

export type CIAppPipelineLevel =
  | typeof PIPELINE
  | typeof STAGE
  | typeof JOB
  | typeof STEP
  | typeof CUSTOM
  | UnparsedObject;
export const PIPELINE = "pipeline";
export const STAGE = "stage";
export const JOB = "job";
export const STEP = "step";
export const CUSTOM = "custom";
