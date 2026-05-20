import { UnparsedObject } from "@datadog/datadog-api-client";

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
