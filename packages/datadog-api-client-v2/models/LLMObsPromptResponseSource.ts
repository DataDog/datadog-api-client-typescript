/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the prompt was created from the registry or discovered from observed LLM calls.
 */

export type LLMObsPromptResponseSource =
  | typeof REGISTRY
  | typeof CODE
  | UnparsedObject;
export const REGISTRY = "registry";
export const CODE = "code";
