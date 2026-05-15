/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Discriminator for a single `display_block` content block. Adding a
 * variant requires coordinated changes in the frontend renderer.
 */

export type LLMObsContentBlockType =
  | typeof MARKDOWN
  | typeof HEADER
  | typeof TEXT
  | typeof JSON
  | typeof IMAGE
  | typeof WIDGET
  | typeof LLMOBS_TRACE
  | UnparsedObject;
export const MARKDOWN = "markdown";
export const HEADER = "header";
export const TEXT = "text";
export const JSON = "json";
export const IMAGE = "image";
export const WIDGET = "widget";
export const LLMOBS_TRACE = "llmobs_trace";
