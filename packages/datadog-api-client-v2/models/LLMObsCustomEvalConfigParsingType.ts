/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Output parsing type for a custom LLM judge evaluator.
 */

export type LLMObsCustomEvalConfigParsingType =
  | typeof STRUCTURED_OUTPUT
  | typeof JSON
  | UnparsedObject;
export const STRUCTURED_OUTPUT = "structured_output";
export const JSON = "json";
