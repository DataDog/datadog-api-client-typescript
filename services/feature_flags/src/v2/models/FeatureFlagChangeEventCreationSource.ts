import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Where the change was made: `UI` for the Datadog app, or `MCP` for a Model Context Protocol (MCP) client.
 */
export type FeatureFlagChangeEventCreationSource =
  | typeof UI
  | typeof MCP
  | UnparsedObject;
export const UI = "UI";
export const MCP = "MCP";
