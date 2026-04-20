/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the custom LLM Observability evaluator configuration resource.
 */

export type LLMObsCustomEvalConfigType =
  | typeof EVALUATOR_CONFIG
  | UnparsedObject;
export const EVALUATOR_CONFIG = "evaluator_config";
