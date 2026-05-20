import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The MCP protocol version used by the step. See https://modelcontextprotocol.io/specification.
 */
export type SyntheticsMCPProtocolVersion =
  | typeof VERSION_2025_06_18
  | UnparsedObject;
export const VERSION_2025_06_18 = "2025-06-18";
