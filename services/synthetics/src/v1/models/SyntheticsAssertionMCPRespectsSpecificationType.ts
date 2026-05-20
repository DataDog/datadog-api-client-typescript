import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the assertion.
 */
export type SyntheticsAssertionMCPRespectsSpecificationType =
  | typeof MCP_RESPECTS_SPECIFICATION
  | UnparsedObject;
export const MCP_RESPECTS_SPECIFICATION = "mcpRespectsSpecification";
