/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A capability advertised by an MCP server.
 */

export type SyntheticsMCPServerCapability =
  | typeof COMPLETIONS
  | typeof EXPERIMENTAL
  | typeof LOGGING
  | typeof PROMPTS
  | typeof RESOURCES
  | typeof TOOLS
  | UnparsedObject;
export const COMPLETIONS = "completions";
export const EXPERIMENTAL = "experimental";
export const LOGGING = "logging";
export const PROMPTS = "prompts";
export const RESOURCES = "resources";
export const TOOLS = "tools";
