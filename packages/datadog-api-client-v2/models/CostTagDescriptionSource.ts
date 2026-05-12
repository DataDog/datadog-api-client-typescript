/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Origin of the description. `human` indicates the description was written by a user, `ai_generated` was produced by AI, and `datadog` is a default supplied by Datadog.
 */

export type CostTagDescriptionSource =
  | typeof HUMAN
  | typeof AI_GENERATED
  | typeof DATADOG
  | UnparsedObject;
export const HUMAN = "human";
export const AI_GENERATED = "ai_generated";
export const DATADOG = "datadog";
