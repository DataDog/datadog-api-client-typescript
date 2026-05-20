import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the assertion.
 */
export type SyntheticsAssertionMCPServerCapabilitiesType =
  | typeof MCP_SERVER_CAPABILITIES
  | UnparsedObject;
export const MCP_SERVER_CAPABILITIES = "mcpServerCapabilities";
